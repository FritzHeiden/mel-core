import Serializer from 'src/database/serializer'

export default class ApiHandler {
  constructor (database) {
    this._db = database
  }

  getRoutes () {
    return [
      {uri: '/api/artists', method: 'GET', callback: this._getArtists.bind(this)}
    ]
  }

  _getArtists (request, response) {
    this._db.readArtists().then(artists => {
      artists = artists.map(artist => Serializer.serializeArtist(artist))

      response.status = 200
      response.setHeader('Content-Type', 'application/json')
      response.body = JSON.stringify({artists})
      response.send()
    })
  }
}
