import File from 'src/data/files/file'
import Track from 'src/data/track'
import Album from 'src/data/album'
import Artist from 'src/data/artist'

export default class Deserializer {
  deserializeTrack (data) {
    let id = data.id
    let title = data.title
    let artists = data.artists.map(artistId => new Artist(artistId))
    let album = new Album(data.album)
    let number = data.number
    let discNumber = data.discNumber
    let filePath = data.filePath
    return new Track(id, title, artists, album, number, discNumber, filePath)
  }

  deserializeAlbum (data) {
    let id = data.id
    let artist = new Artist(data.artist)
    let title = data.title
    let year = data.year
    let tracks = []
    let featureArtists = data.featureArtists.map(artistId => new Artist(artistId))
    return new Album(id, artist, title, year, tracks, featureArtists)
  }

  deserializeArtist (data) {
    let id = data.id
    let name = data.name
    let albums = []
    let featureAlbums = []
    return new Artist(id, name, albums, featureAlbums)
  }

  deserializeFile (data) {
    if (!data) return null
    let path = data.path
    let type = data.type
    let lastModified = data.lastModified
    let track = new Track(data.trackId)
    return new File(path, type, null, lastModified, track)
  }
}