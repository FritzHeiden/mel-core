import Serializer from '../database/serializer'

const
  GET_ARTISTS = 'get_artists',
  GET_ARTIST = 'get_artist',
  GET_ALBUM = 'get_album',
  GET_TRACK = 'get_track'

export default class MelServerSocket {
  constructor (webSocket, identity, database) {
    this._webSocket = webSocket
    this._identity = identity
    this._sockets = []
    this._database = database
  }

  initialize () {
    this._webSocket.on('connection', socket => {
      console.log('New Client: ', socket.id)
      socket.on(GET_ARTISTS, () => this._getArtists(socket))
      socket.on(GET_ARTIST, data => this._getArtist(socket, data))
      socket.on(GET_ALBUM, data => this._getAlbum(socket, data))
      socket.on(GET_TRACK, data => this._getTrack(socket, data))
    })
    console.log('Web Socket listening ...')
  }

  _getArtists (socket) {
    this._database.readArtists()
      .then(artists => {
        socket.emit(GET_ARTISTS,
          Serializer.serializeArtists(artists))
      })
      .catch(err => console.error(err.stack))
  }

  _getArtist (socket, data) {
    this._database.readArtist(data.artistId)
      .then(artist => socket.emit(GET_ARTIST,
        Serializer.serializeArtist(artist)))
      .catch(err => console.error(err.stack))
  }

  _getAlbum (socket, data) {
    this._database.readAlbum(data.albumId)
      .then(album => socket.emit(GET_ALBUM,
          Serializer.serializeAlbum(album)))
      .catch(err => console.error(err.stack))
  }

  _getTrack (socket, data) {
    this._database.readTrack(data.trackId)
      .then(track => socket.emit(GET_TRACK,
          Serializer.serializeTrack(track)))
      .catch(err => console.error(err.stack))
  }

  set identity (identity) {
    this._identity = identity
  }
}
