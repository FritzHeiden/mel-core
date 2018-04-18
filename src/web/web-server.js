export default class WebServer {
  addRoutes (routes) {
    routes.forEach(route => this.addRoute(route))
  }

  addRoute (route) {
    let method = route.method
    let uri = route.uri
    let callback = route.callback
    switch (method.toUpperCase()) {
      case 'GET':
        this._get(uri, callback)
        break
      case 'POST':
        this._post(uri, callback)
        break
      case 'PUT':
        this._put(uri, callback)
        break
      case 'DELETE':
        this._delete(uri, callback)
        break
    }
  }

  addStaticDirectory (directory) {
    this._static(directory)
  }

  _get (uri, callback) {
    throw new Error('WebServer._get(uri, callback) not implemented.')
  }

  _post (uri, callback) {
    throw new Error('WebServer._post(uri, callback) not implemented.')
  }

  _put (uri, callback) {
    throw new Error('WebServer._put(uri, callback) not implemented.')
  }

  _delete (uri, callback) {
    throw new Error('WebServer._delete(uri, callback) not implemented.')
  }

  _static (directory) {
    throw new Error('WebServer._static(directory) not implemented.')
  }

  start () {
    throw new Error('WebServer.start() not implemented.')
  }

  get port () {
    throw new Error('WebServer.port() not implemented.')
  }

  get server () {
    throw new Error('WebServer.server() not implemented.')
  }
}
