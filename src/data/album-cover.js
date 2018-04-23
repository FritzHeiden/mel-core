export default class AlbumCover {
  constructor (buffer, mime, albumId) {
    this._buffer = buffer
    this._mime = mime
    this._albumId = albumId
  }

  getBuffer () {
    return this._buffer
  }

  setBuffer (buffer) {
    this._buffer = buffer1
  }

  getMime () {
    return this._mime
  }

  setMime (mime) {
    this._mime = mime
  }

  getAlbumId () {
    return this._albumId
  }

  setAlbumId (albumId) {
    this._albumId = albumId
  }
}