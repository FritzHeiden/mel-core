export default class Album {
  constructor (
    id,
    artist,
    title,
    year,
    tracks = [],
    featureArtists = [],
    albumCover
  ) {
    this._id = id
    this._title = title
    this._year = year
    this._tracks = tracks
    this._artist = artist
    this._featureArtists = featureArtists
    this._albumCover = albumCover
  }

  addTrack (newTrack) {
    newTrack.album = this
    if (this._tracks.findIndex(track => track.id === newTrack.id) === -1) {
      this._tracks.push(newTrack)
    }
  }

  addTracks (tracks) {
    tracks.forEach(track => this.addTrack(track))
  }

  addFeatureArtist (newArtist) {
    if (
      this._featureArtists.findIndex(artist => artist.id === newArtist.id) ===
      -1
    ) {
      this._featureArtists.push(newArtist)
      newArtist.addFeatureAlbum(this)
    }
  }

  addFeatureArtists (artists) {
    artists.forEach(artist => this.addFeatureArtist(artist))
  }

  toString () {
    return (
      `Album {` +
      `title: ${this.title}, ` +
      `year: ${this.year}, ` +
      `trackCount: ${this.tracks.length}, ` +
      `artist: ${this.artist.name}, ` +
      `featureArtists: ${this.featureArtists.map(artist => artist.name)}, ` +
      `id: ${this.id}}`
    )
  }

  deleteAlbumCoverBuffer () {
    delete this._albumCover
  }

  getAlbumCover () {
    return this._albumCover
  }

  setAlbumCover (cover) {
    this._albumCover = cover
  }

  set artist (artist) {
    this._artist = artist
  }

  get artist () {
    return this._artist
  }

  get title () {
    return this._title
  }

  set title (value) {
    this._title = value
  }

  get year () {
    return this._year
  }

  set year (value) {
    this._year = value
  }

  get tracks () {
    return this._tracks
  }

  set tracks (value) {
    this._tracks = value
  }

  get id () {
    return this._id
  }

  set id (value) {
    this._id = value
  }

  get featureArtists () {
    return this._featureArtists
  }

  set featureArtists (value) {
    this._featureArtists = value
  }
}
