const Deserializer = require('../../utils/deserializer')

module.exports = class MelClientSocket {
  constructor (webSocket) {
    this._webSocket = webSocket
  }

  getArtists () {
    return new Promise((resolve, reject) => {
      this._webSocket.emit('get_artists', {})
      this._webSocket.on('get_artists', artists => {
        resolve(Deserializer.deserializeArtists(artists))
      })
    })
  }

  getArtist (artistId) {
    return new Promise((resolve, reject) => {
      this._webSocket.emit('get_artist', { artistId })
      this._webSocket.on('get_artist', artist => {
        resolve(Deserializer.deserializeArtist(artist))
      })
    })
  }

  getAlbum (albumId) {
    return new Promise((resolve, reject) => {
      this._webSocket.emit('get_album', { albumId })
      this._webSocket.on('get_album', albumJson => {
        resolve(Deserializer.deserializeAlbum(albumJson))
      })
    })
  }

  getTrack (trackId) {
    return new Promise((resolve, reject) => {
      this._webSocket.emit('get_track', { trackId })
      this._webSocket.on('get_track', trackJson => {
        let track = Deserializer.deserializeTrack(trackJson)
        resolve(track)
      })
    })
  }
}
