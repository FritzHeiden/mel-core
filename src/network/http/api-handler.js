import Serializer from '../../utils/serializer'
import Route from './route'

export default class ApiHandler {
  constructor (database, fileSystem) {
    this._db = database
    this._fileSystem = fileSystem
  }

  getRoutes () {
    const { GET } = Route
    return [
      new Route('/api/artists', GET, this._getArtists.bind(this)),
      new Route('/api/tracks/*/data', GET, this._getTrackData.bind(this))
    ]
  }

  _getArtists (request, response) {
    this._db.readArtists().then(artists => {
      artists = artists.map(artist => Serializer.serializeArtist(artist))

      response.status = 200
      response.setHeader('Content-Type', 'application/json')
      response.send(JSON.stringify({ artists }))
    })
  }

  _getTrackData (request, response) {
    const urlParts = request.getUrl().split('/')
    const trackId = urlParts[3]
    this._db.readFilesByTrackId(trackId).then(files => {
      const file = files[0]
      this._fileSystem.readFileBuffer(file.path).then(data => {
        response.sendBuffer(data)
      })
    })
  }
}
