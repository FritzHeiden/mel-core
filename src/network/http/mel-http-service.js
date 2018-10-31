const Deserializer = require('../../utils/deserializer')

module.exports = class MelHttpService {
  constructor (host, port, { webRoot }) {
    this._host = host
    this._port = port
    this._webRoot = '/'
    if (webRoot) this._webRoot = webRoot
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
      this._sendRequest('GET', 'api/artists')
        .then(response =>
          resolve(Deserializer.deserializeArtists(JSON.parse(response.body)))
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

  downloadTrack (trackId, progressHandler) {
    let options = {
      responseType: 'arraybuffer'
    }
    if (progressHandler) {
      options.progressHandler = progressHandler
    }
    return new Promise((resolve, reject) => {
      this._sendRequest('GET', `api/tracks/${trackId}/data`, options)
        .then(response => resolve(response.body))
        .catch(error => reject(error))
    })
  }

  async getTrackDataInfo (trackId) {
    const response = await this._sendRequest(
      'HEAD',
      `api/tracks/${trackId}/data`
    )
    return {
      size: parseInt(response.headers['content-length'])
    }
  }

  async getAlbumCover (albumId) {
    const response = await this._sendRequest(
      'GET',
      `api/albums/${albumId}/cover`,
      {
        responseType: 'arraybuffer'
      }
    )
    return response.body
  }

  getAlbumCoverUrl (albumId) {
    return `${this._webRoot}api/albums/${albumId}/cover`
  }

  async _sendRequest (method, uri, { responseType, progressHandler } = {}) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest()
      request.addEventListener('load', event => {
        if (request.status === 200) {
          resolve({
            body: request.response,
            headers: this._mapHeaders(request)
          })
        } else {
          reject(request.status)
        }
      })

      if (progressHandler) {
        request.addEventListener('progress', event => {
          progressHandler(event.loaded, event.total)
        })
      }

      if (responseType) {
        request.responseType = responseType
      }

      console.log(`http://${this._host}:${this._port}${this._webRoot}${uri}`)
      request.open(
        method,
        `http://${this._host}:${this._port}${this._webRoot}${uri}`,
        true
      )
      request.send()
    })
  }

  _mapHeaders (request) {
    let headers = {}
    request
      .getAllResponseHeaders()
      .split('\n')
      .forEach(header => {
        const { 0: field, 1: value } = header.split(':')
        headers[field.toLowerCase()] = (value + '').trim()
      })

    return headers
  }
}
