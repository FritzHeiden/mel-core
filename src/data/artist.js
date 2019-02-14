module.exports = class Artist {
  constructor(id, name, albums = [], featureAlbums = []) {
    this._id = id;
    this._name = name;
    this._albums = albums;
    this._featureAlbums = featureAlbums;
  }

  addAlbum(newAlbum) {
    newAlbum.setArtist(this);
    let album = this._albums.find(album => album.getId() === newAlbum.getId());
    if (!album) {
      this._albums.push(newAlbum);
    } else {
      album.addTracks(newAlbum.getTracks());
    }
  }

  addAlbums(albums) {
    albums.forEach(album => this.addAlbum(album));
  }

  addFeatureAlbum(newAlbum) {
    if (
      this._featureAlbums.findIndex(
        album => album.getId() === newAlbum.getId()
      ) === -1
    ) {
      newAlbum.addFeatureArtist(this);
      this._featureAlbums.push(newAlbum);
    }
  }

  addFeatureAlbums(albums) {
    albums.forEach(album => this.addFeatureAlbum(album));
  }

  complement(artist) {
    const complementedArtist = new Artist(
      this._id || artist.getId(),
      this._name || artist.getName(),
      this._albums,
      this._featureAlbums
    );
    complementedArtist.addAlbums(artist.getAlbums());
    complementedArtist.addFeatureAlbums(artist.getFeatureAlbums());
    return complementedArtist;
  }

  toString() {
    return (
      `Artist {` +
      `name: ${this._name}, ` +
      `albums: ${this._albums.map(album => album.getTitle())}, ` +
      `featureAlbums: ${this._featureAlbums.map(album => album.getTitle())}, ` +
      `id: ${this._id}}`
    );
  }

  getName() {
    return this._name;
  }

  setName(value) {
    this._name = value;
    return this;
  }

  getAlbums() {
    return this._albums;
  }

  setAlbums(value) {
    this._albums = value;
    return this;
  }

  getId() {
    return this._id;
  }

  setId(value) {
    this._id = value;
    return this;
  }

  getFeatureAlbums() {
    return this._featureAlbums;
  }

  setFeatureAlbums(value) {
    this._featureAlbums = value;
    return this;
  }
};
