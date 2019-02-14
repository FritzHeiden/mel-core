module.exports = class Album {
  constructor(
    id,
    artist,
    title,
    year,
    tracks = [],
    featureArtists = [],
    albumCover
  ) {
    this._id = id;
    this._title = title;
    this._year = year;
    this._tracks = [];
    this.addTracks(tracks);
    this._artist = artist;
    this._featureArtists = featureArtists;
    this._albumCover = albumCover;
  }

  addTrack(newTrack) {
    newTrack.setAlbum(this);
    if (
      this._tracks.findIndex(track => track.getId() === newTrack.getId()) === -1
    ) {
      this._tracks.push(newTrack);
    }
  }

  addTracks(tracks) {
    tracks.forEach(track => this.addTrack(track));
  }

  addFeatureArtist(newArtist) {
    if (
      this._featureArtists.findIndex(
        artist => artist.getId() === newArtist.getId()
      ) === -1
    ) {
      this._featureArtists.push(newArtist);
      newArtist.addFeatureAlbum(this);
    }
  }

  addFeatureArtists(artists) {
    artists.forEach(artist => this.addFeatureArtist(artist));
  }

  deleteTrack(trackId) {
    const index = this._tracks.findIndex(track => track.getId() === trackId);
    this._tracks.splice(index, 1);
  }

  complement(album) {
    const complementedAlbum = new Album(
      this._id || album.getId(),
      this._artist || album.getArtist(),
      this._title || album.getTitle(),
      this._year || album.getYear(),
      this._tracks,
      this._featureArtists,
      this._albumCover || album.getAlbumCover()
    );
    complementedAlbum.addFeatureArtists(album.getFeatureArtists());
    complementedAlbum.addTracks(album.getTracks());
    return complementedAlbum;
  }

  toString() {
    return (
      `Album {` +
      `title: ${this._title}, ` +
      `year: ${this._year}, ` +
      `trackCount: ${this._tracks.length}, ` +
      `artist: ${this._artist.getName()}, ` +
      `featureArtists: ${this._featureArtists.map(artist =>
        artist.getName()
      )}, ` +
      `id: ${this._id}}`
    );
  }

  deleteAlbumCoverBuffer() {
    delete this._albumCover;
  }

  getAlbumCover() {
    return this._albumCover;
  }

  setAlbumCover(cover) {
    this._albumCover = cover;
  }

  setArtist(artist) {
    this._artist = artist;
    return this;
  }

  getArtist() {
    return this._artist;
  }

  getTitle() {
    return this._title;
  }

  setTitle(value) {
    this._title = value;
    return this;
  }

  getYear() {
    return this._year;
  }

  setYear(value) {
    this._year = value;
    return this;
  }

  getTracks() {
    return this._tracks;
  }

  setTracks(value) {
    this._tracks = value;
    return this;
  }

  getId() {
    return this._id;
  }

  setId(value) {
    this._id = value;
    return this;
  }

  getFeatureArtists() {
    return this._featureArtists;
  }

  setFeatureArtists(value) {
    this._featureArtists = value;
    return this;
  }
};
