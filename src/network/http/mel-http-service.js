import Deserializer from '../../utils/deserializer'

export default class MelHttpService {
  constructor (host, port) {
    this._host = host
    this._port = port
  }

  // getTracks () {
  //   return new Promise((resolve, reject) =>
  //     this._sendRequest('GET', '/api/tracks')
  //       .then(response =>
  //         resolve(
  //           this._deserializer.deserializeTracks(JSON.parse(response).tracks)
  //         )
  //       )
  //       .catch(err => reject(err))
  //   )
  // }

  // getArtist (artistId) {
  //   return new Promise((resolve, reject) =>
  //     this._sendRequest('GET', '/api/artists/' + artistId)
  //       .then(response =>
  //         resolve(
  //           this._deserializer.deserializeArtist(JSON.parse(response).artist)
  //         )
  //       )
  //       .catch(err => reject(err))
  //   )
  // }

  getArtists () {
    return new Promise((resolve, reject) =>
      this._sendRequest('GET', '/api/artists')
        .then(response =>
          resolve(
            Deserializer.deserializeArtists(JSON.parse(response))
          )
        )
        .catch(err => reject(err))
    )
  }

  // getAlbum (albumId) {
  //   return new Promise((resolve, reject) =>
  //     this._sendRequest('GET', '/api/albums/' + albumId)
  //       .then(response =>
  //         resolve(
  //           this._deserializer.deserializeAlbum(JSON.parse(response).album)
  //         )
  //       )
  //       .catch(err => reject(err))
  //   )
  // }

  downloadTrack (trackId) {
    return new Promise((resolve, reject) => {
      this._sendRequest('GET', `/api/tracks/${trackId}/data`, {responseType: 'arraybuffer'})
        .then(arrayBuffer => resolve(arrayBuffer))
        .catch(error => reject(error))
    })
  }

  _sendRequest (method, uri, {responseType}) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest()
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            resolve(request.response)
          } else {
            reject(request.status)
          }
        }
      }
      if (responseType) {
        request.responseType = responseType
      }

      request.open(method, `http://${this._host}:${this._port}${uri}`, true)
      request.send()
    })
  }
}
