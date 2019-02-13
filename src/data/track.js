module.exports = class Track {
  constructor(
    id,
    title = "",
    artists = [],
    album = {},
    number = 0,
    discNumber = 0
  ) {
    this._title = title;
    this._artists = artists;
    this._album = album;
    this._number = number;
    this._discNumber = discNumber;
    this._id = id;
  }

  addArtist(newArtist) {
    if (
      this._artists.findIndex(
        artist => artist.getId() === newArtist.getId()
      ) === -1
    ) {
      this._artists.push(newArtist);
    }
  }

  toString() {
    return (
      `Track {` +
      `title: ${this._title}, ` +
      `artists: ${this._artists.map(artist => artist.getName())}, ` +
      `album: ${this._album.name}, ` +
      `number: ${this._number}, ` +
      `discNumber: ${this._discNumber}, ` +
      `id: ${this._id}}`
    );
  }

  getTitle() {
    return this._title;
  }

  setTitle(value) {
    this._title = value;
    return this;
  }

  getArtists() {
    return this._artists;
  }

  setArtists(value) {
    this._artists = value;
    return this;
  }

  getAlbum() {
    return this._album;
  }

  setAlbum(value) {
    this._album = value;
    return this;
  }

  getNumber() {
    return this._number;
  }

  setNumber(value) {
    this._number = value;
    return this;
  }

  getDiscNumber() {
    return this._discNumber;
  }

  setDiscNumber(value) {
    this._discNumber = value;
    return this;
  }

  getId() {
    return this._id;
  }

  setId(value) {
    this._id = value;
    return this;
  }
};
