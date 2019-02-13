let serializer = {};

serializer.serializeTrack = track => {
  if (!track) {
    return null;
  }

  let id = track.getId();
  let title = track.getTitle();
  let artists = track.getArtists().map(artist => artist.getId());
  let album = track.getAlbum().getId();
  let number = track.getNumber();
  let discNumber = track.getDiscNumber();
  return { id, title, number, album, discNumber, artists };
};

serializer.serializeAlbum = album => {
  if (!album) {
    return null;
  }

  let id = album.getId();
  let artist = album.getArtist().getId();
  let title = album.getTitle();
  let year = album.getYear();
  let featureArtists = album.getFeatureArtists().map(artist => artist.getId());
  let tracks = album.getTracks().map(track => track.getId());
  return { id, artist, title, year, featureArtists, tracks };
};

serializer.serializeArtist = artist => {
  if (!artist) {
    return null;
  }
  try {
    let id = artist.getId();
    let name = artist.getName();
    let albums = artist.getAlbums()
      ? artist.getAlbums().map(album => album.getId())
      : [];
    let featureAlbums = artist.getFeatureAlbums()
      ? artist.getFeatureAlbums().map(album => album.getId())
      : [];
    return { id, name, albums, featureAlbums };
  } catch (error) {
    throw new Error(`Could not serialize artist: ${error}`);
  }
};

serializer.serializeArtists = artists => {
  if (!artists) {
    return null;
  }

  return artists.map(artist => serializer.serializeArtist(artist));
};

serializer.serializeFile = file => {
  if (!file) {
    return null;
  }

  let path = file.getPath();
  let type = file.getType();
  let lastModified = file.getLastModified();
  let trackId = file.getTrack().getId();
  return { path, type, lastModified, trackId };
};

module.exports = serializer;
