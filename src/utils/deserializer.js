import File from '../data/files/file'
import Track from '../data/track'
import Album from '../data/album'
import Artist from '../data/artist'

let deserializer = {}

deserializer.deserializeTrack = trackJson => {
  if (!trackJson) {
    return null
  }
  let id = trackJson.id
  let title = trackJson.title
  let artists = trackJson.artists.map(artistId => new Artist(artistId))
  let album = new Album(trackJson.album)
  let number = trackJson.number
  let discNumber = trackJson.discNumber
  let filePath = trackJson.filePath
  return new Track(id, title, artists, album, number, discNumber, filePath)
}

deserializer.deserializeAlbum = albumJson => {
  if (!albumJson) {
    return null
  }
  if (typeof albumJson === 'string') {
    return new Album(albumJson)
  }

  let id = albumJson.id
  let artist = deserializer.deserializeArtist(albumJson.artist)
  let title = albumJson.title
  let year = albumJson.year
  let tracks = albumJson.tracks
    ? albumJson.tracks.map(trackId => new Track(trackId))
    : []
  let featureArtists = albumJson.featureArtists
    ? albumJson.featureArtists.map(artistId => new Artist(artistId))
    : []
  let album = new Album(id, artist, title, year, tracks, featureArtists)
  return album
}

deserializer.deserializeAlbums = albumsJson => {
  if (!albumsJson) {
    return null
  }
  return albumsJson.map(artistJson => deserializer.deserializeAlbum(artistJson))
}

deserializer.deserializeArtist = artistJson => {
  if (!artistJson) {
    return null
  }
  if (typeof artistJson === 'string') {
    return new Artist(artistJson)
  }

  let id = artistJson.id
  let name = artistJson.name ? artistJson.name : 'Unknown Artist'
  let albums = deserializer.deserializeAlbums(artistJson.albums)
  let featureAlbums = deserializer.deserializeAlbums(artistJson.featureAlbums)
  return new Artist(id, name, albums, featureAlbums)
}

deserializer.deserializeArtists = artistsJson => {
  if (!artistsJson) {
    return null
  }
  return artistsJson.map(artistJson =>
    deserializer.deserializeArtist(artistJson)
  )
}

deserializer.deserializeFile = fileJson => {
  if (!fileJson) {
    return null
  }

  let path = fileJson.path
  let type = fileJson.type
  let lastModified = fileJson.lastModified
  let track = new Track(fileJson.trackId)
  return new File(path, type, null, lastModified, track)
}

deserializer.deserializeFiles = filesJson => {
  if (!filesJson) {
    return null
  }

  return filesJson.map(fileJson => deserializer.deserializeFile(fileJson))
}

export default deserializer
