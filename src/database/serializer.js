let serializer = {}

serializer.serializeTrack = track => {
  if (!track) {
    return null
  }

  let id = track.id
  let title = track.title
  let artists = track.artists.map(artist => artist.id)
  let album = track.album.id
  let number = track.number
  let discNumber = track.discNumber
  return { id, title, number, album, discNumber, artists }
}

serializer.serializeAlbum = album => {
  if (!album) {
    return null
  }

  let id = album.id
  let artist = album.artist.id
  let title = album.title
  let year = album.year
  let featureArtists = album.featureArtists.map(artist => artist.id)
  let tracks = album.tracks.map(track => track.id)
  return { id, artist, title, year, featureArtists, tracks }
}

serializer.serializeArtist = artist => {
  if (!artist) {
    return null
  }
  try {
    let id = artist.id
    let name = artist.name
    let albums = artist.albums ? artist.albums.map(album => album.id) : []
    let featureAlbums = artist.featureAlbums
      ? artist.featureAlbums.map(album => album.id)
      : []
    return { id, name, albums, featureAlbums }
  } catch (error) {
    throw new Error(`Could not serialize artist: ${error}`)
  }
}

serializer.serializeArtists = artists => {
  if (!artists) {
    return null
  }

  return artists.map(artist => serializer.serializeArtist(artist))
}

serializer.serializeFile = file => {
  if (!file) {
    return null
  }

  let path = file.path
  let type = file.type
  let lastModified = file.lastModified
  let trackId = file.track.id
  return { path, type, lastModified, trackId }
}

export default serializer
