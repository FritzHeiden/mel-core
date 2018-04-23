import Serializer from '../../utils/serializer'
import Route from './route'

const ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin'
const ACCESS_CONTROL_EXPOSE_HEADERS = 'Access-Control-Expose-Headers'
const CONTENT_LENGTH = 'Content-Length'
const CONTENT_TYPE = 'Content-Type'

export default class ApiHandler {
  constructor (database, fileSystem, albumCoverManager) {
    this._db = database
    this._fileSystem = fileSystem
    this._albumCoverManager = albumCoverManager
  }

  getRoutes () {
    const { GET } = Route
    return [
      new Route('/api/artists', GET, this._getArtists.bind(this)),
      new Route('/api/tracks/*/data', GET, this._getTrackData.bind(this)),
      new Route('/api/albums/*/cover', GET, this._getAlbumCover.bind(this))
    ]
  }

  _getArtists (request, response) {
    this._db
      .readArtists()
      .then(artists => {
        artists = artists.map(artist => Serializer.serializeArtist(artist))

        response.status = 200
        response.setHeader('Content-Type', 'application/json')
        response.send(JSON.stringify({ artists }))
      })
      .catch(console.error)
  }

  _getTrackData (request, response) {
    const { 3: trackId } = request.getUrl().split('/')
    this._db
      .readFilesByTrackId(trackId)
      .then(files => {
        const file = files[0]
        this._fileSystem.readFileBuffer(file.path).then(data => {
          response.setHeader(ACCESS_CONTROL_ALLOW_ORIGIN, '*')
          response.setHeader(ACCESS_CONTROL_EXPOSE_HEADERS, CONTENT_LENGTH)
          response.sendBuffer(data)
        })
      })
      .catch(console.error)
  }

  _getAlbumCover (request, response) {
    const { 3: albumId } = request.getUrl().split('/')
    this._albumCoverManager
      .loadAlbumCover(albumId)
      .then(albumCover => {
        response.setHeader(ACCESS_CONTROL_ALLOW_ORIGIN, '*')
        response.setHeader(CONTENT_TYPE, albumCover.getMime())
        response.sendBuffer(albumCover.getBuffer())
      })
      .catch(console.error)
  }
}
