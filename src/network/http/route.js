const GET = 1
const POST = 2
const PUT = 3
const DELETE = 4

class Route {
  constructor (uri, method, handler) {
    this._uri = uri
    this._method = method
    this._handler = handler
  }

  setUri (uri) {
    this._uri = uri
  }

  getUri () {
    return this._uri
  }

  setMethod (method) {
    this._method = method
  }

  getMethod () {
    return this._method
  }

  setHandler (handler) {
    this._handler = handler
  }

  getHandler () {
    return this._handler
  }
}

Route.GET = GET
Route.POST = POST
Route.PUT = PUT
Route.DELETE = DELETE

module.exports = Route
