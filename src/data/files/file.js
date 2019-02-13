const MP3 = "mp3";
const FLAC = "flac";

class File {
  constructor(path, type, buffer = null, lastModified = 0, track) {
    this._path = path;
    this._type = type;
    this._buffer = buffer;
    this._lastModified = lastModified;
    this._track = track;
  }

  deleteBuffer() {
    delete this._buffer;
  }

  getPath() {
    return this._path;
  }

  setPath(value) {
    this._path = value;
    return this;
  }

  getType() {
    return this._type;
  }

  setType(value) {
    this._type = value;
    return this;
  }

  getBuffer() {
    return this._buffer;
  }

  setBuffer(value) {
    this._buffer = value;
    return this;
  }

  getLastModified() {
    return this._lastModified;
  }

  setLastModified(value) {
    this._lastModified = value;
    return this;
  }

  getTrack() {
    return this._track;
  }

  setTrack(value) {
    this._track = value;
    return this;
  }
}

File.MP3 = MP3;
File.FLAC = FLAC;

module.exports = File;
