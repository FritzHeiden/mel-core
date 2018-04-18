export default class Artist {
  constructor (id, name, albums = [], featureAlbums = []) {
    this._id = id
    this._name = name
    this._albums = albums
    this._featureAlbums = featureAlbums
  }

  addAlbum (newAlbum) {
    newAlbum.artist = this
    if (this._albums.findIndex(album => album.id === newAlbum.id) === -1) {
      this._albums.push(newAlbum)
    }
  }

  addAlbums (albums) {
    albums.forEach(album => this.addAlbum(album))
  }

  addFeatureAlbum (newAlbum) {
    if (
      this._featureAlbums.findIndex(album => album.id === newAlbum.id) === -1
    ) {
      newAlbum.addFeatureArtist(this)
      this._featureAlbums.push(newAlbum)
    }
  }

  addFeatureAlbums (albums) {
    albums.forEach(album => this.addFeatureAlbum(album))
  }

  toString () {
    return (
      `Artist {name: ${this.name}, albums: ${this.albums.map(
        album => album.title
      )}, ` +
      `featureAlbums: ${this.featureAlbums.map(album => album.title)}, id: ${
        this.id
      }}`
    )
  }

  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
  }

  get albums () {
    return this._albums
  }

  set albums (value) {
    this._albums = value
  }

  get id () {
    return this._id
  }

  set id (value) {
    this._id = value
  }

  get featureAlbums () {
    return this._featureAlbums
  }

  set featureAlbums (value) {
    this._featureAlbums = value
  }
}
