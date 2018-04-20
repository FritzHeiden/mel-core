import Serializer from '../database/serializer'
import Route from './route'

export default class ApiHandler {
  constructor (database) {
    this._db = database
  }

  getRoutes () {
    const { GET } = Route
    return [new Route('/api/artists', GET, this._getArtists.bind(this))]
  }

  _getArtists (request, response) {
    this._db.readArtists().then(artists => {
      artists = artists.map(artist => Serializer.serializeArtist(artist))

      response.status = 200
      response.setHeader('Content-Type', 'application/json')
      response.send(JSON.stringify({ artists }))
    })
  }
}
