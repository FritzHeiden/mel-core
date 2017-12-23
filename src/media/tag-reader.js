import Id3Tagger from 'src/media/id3-tagger'
import { IdGenerator } from 'src/database/id-generator'
import Artist from 'src/data/artist'
import Album from 'src/data/album'
import Track from 'src/data/track'

export default class TagReader {
  constructor (configuration) {
    this._id3Tagger = new Id3Tagger()
    this._isReading = false
    this._jobs = []
    this._config = configuration
  }

  _readNextFile () {
    setTimeout(() => {
      if (this._isReading || this._jobs.length === 0) {
        return
      }

      this._isReading = true
      let job = this._jobs.pop()
      this._id3Tagger.readTags(job.file).then(tags => {
        let track = this._generateMetaData(job.file, tags)
        this._isReading = false
        this._readNextFile()
        job.resolve(track)
      }).catch(err => {
        this._isReading = false
        this._readNextFile()
        job.reject(err)
      })
    }, 1)
  }

  readTags (file) {
    return new Promise((resolve, reject) => {
      this._jobs.unshift({file, resolve, reject})
      this._readNextFile()
    })
  }

  _generateMetaData (file, tags) {
    tags = this._evaluateTags(tags)

    let trackArtists = tags.trackArtistNames.map(trackArtistName => {
      return new Artist(undefined, trackArtistName, [], [])
    })
    trackArtists.forEach(trackArtist => {
      trackArtist.id = IdGenerator.getArtistId(trackArtist)
    })

    let albumArtistName = tags.albumArtistName
    let albumArtist = new Artist(undefined, albumArtistName, [], [])
    albumArtist.id = IdGenerator.getArtistId(albumArtist)

    trackArtists.forEach(artist => {
      if (artist.id === albumArtist.id) {
        albumArtist = artist
      }
    })

    let albumTitle = tags.albumTitle
    let year = tags.year
    let album = new Album(undefined, albumArtist, albumTitle, year, [], [])
    album.id = IdGenerator.getAlbumId(album, album.artist)

    let trackTitle = tags.trackTitle
    let trackNumber = tags.trackNumber
    let discNumber = tags.discNumber
    let track = new Track(undefined, trackTitle, trackArtists, album, trackNumber, discNumber)
    track.id = IdGenerator.getTrackId(track)

    album.addTrack(track)
    trackArtists.forEach(artist => {
      if (albumArtist.id !== artist.id) {
        album.addFeatureArtist(artist)
        artist.addFeatureAlbum(album)
      }
    })

    albumArtist.addAlbum(album)

    return track
  }

  _evaluateTags (tags) {
    let year = tags.year ? parseInt(tags.year.split('-')[0]) : undefined
    let number = tags.number ? parseInt(tags.number.split('/')[0]) : 0
    let discNumber = tags.discNumber ? parseInt(tags.discNumber) : 1

    let trackArtistNames = []
    let trackTitle = tags.trackTitle
    if (trackTitle) {
      let result = this._analyseFeatureArtists(tags.trackTitle)
      trackTitle = result.string.replace(/ +/g, ' ').trim()
      trackArtistNames.concat(result.artistNames.filter(artistName => trackArtistNames.indexOf(artistName) === -1))
    }

    let trackArtistName = tags.artistName
    if (trackArtistName) {
      let result = this._analyseFeatureArtists(trackArtistName)
      trackArtistName = result.string.replace(/ +/g, ' ').trim()
      trackArtistNames.concat(result.artistNames.filter(artistName => trackArtistNames.indexOf(artistName) === -1))
      trackArtistNames.push(trackArtistName)
    }

    let albumArtistName = tags.artistName
    if (albumArtistName) {
      let result = this._analyseFeatureArtists(albumArtistName)
      albumArtistName = result.string.replace(/ +/g, ' ').trim()
      trackArtistNames.concat(result.artistNames.filter(artistName => trackArtistNames.indexOf(artistName) === -1))
    }

    if (!albumArtistName || albumArtistName === '') albumArtistName = trackArtistName
    let albumTitle = tags.albumTitle

    return {trackTitle, year, number, discNumber, trackArtistNames, albumArtistName, albumTitle}
  }

  _analyseFeatureArtists (string) {
    let artistNames = []
    let newString = string
    this._config.featurePatterns.forEach(featurePattern => {
      let artistListString
      let prefix = featurePattern.pattern.split('%a')[0]
      let suffix = featurePattern.pattern.split('%a')[1]
      let startIndex = string.indexOf(prefix)
      if (startIndex !== -1) {
        artistListString = string.substr(startIndex + prefix.length)
        let endIndex = artistListString.indexOf(suffix)
        if (endIndex !== -1) {
          artistListString = artistListString.substr(0, endIndex)
          artistListString.split(featurePattern.delimiter).map(artist => artist.trim()).forEach(artist => artistNames.push(artist))

          let last = artistNames.slice(-1)
          artistNames = artistNames.slice(0, artistNames.length - 1)
          last[0].split(featurePattern.endingDelimiter).forEach(artist => artistNames.push(artist.trim().replace(/ +/g, ' ')))

          newString = string.substr(0, string.indexOf(prefix))
          newString = newString + string.substr(string.indexOf(suffix) + suffix.length, string.length)
          newString = newString.replace(/ +/g, ' ')
        }
      }
    })
    return {string: newString, artistNames}
  }
}
