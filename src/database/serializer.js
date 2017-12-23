export default class Serializer {
  serializeTrack (track) {
    let id = track.id
    let title = track.title
    let artists = track.artists.map(artist => artist.id)
    let album = track.album.id
    let number = track.number
    let discNumber = track.discNumber
    return {id, title, number, album, discNumber, artists}
  }

  serializeAlbum (album) {
    let id = album.id
    let artist = album.artist.id
    let title = album.title
    let year = album.year
    let featureArtists = album.featureArtists.map(artist => artist.id)
    return {id, artist, title, year, featureArtists}
  }

  serializeArtist (artist) {
    let id = artist.id
    let name = artist.name
    return {id, name}
  }

  serializeFile (file) {
    let path = file.path
    let type = file.type
    let lastModified = file.lastModified
    let trackId = file.track.id
    return {path, type, lastModified, trackId}
  }
}
