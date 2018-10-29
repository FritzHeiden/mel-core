import Response from './response'
import Route from './route'
import Request from './request'

export default class WebServer {
  constructor () {
    this._webRoot = '/'
    this._routes = []
    this._directories = []
  }

  addRoutes (routes) {
    routes.forEach(route => this.addRoute(route))
  }

  addRoute (route) {
    this._routes.push(route)
  }

  setWebRoot (webRoot) {
    if (webRoot) this._webRoot = webRoot
    if (!webRoot.endsWith('/')) this._webRoot += '/'
    return this
  }

  getWebRoot () {
    return this._webRoot
  }

  addStaticDirectory (directory) {
    this._directories.push(directory)
  }

  apply () {
    this._routes.forEach(route => this._applyRoute(route))
    this._directories.forEach(directory =>
      this._static(directory, { 'Content-Base': this._webRoot })
    )
  }

  _applyRoute (route) {
    const { GET, POST, PUT, DELETE } = Route
    let method = route.getMethod()
    let uri = route.getUri()
    uri = this._webRoot + uri
    let handler = this._wrapCallback(route.getHandler())
    switch (method) {
      case GET:
        this._get(uri, handler)
        break
      case POST:
        this._post(uri, handler)
        break
      case PUT:
        this._put(uri, handler)
        break
      case DELETE:
        this._delete(uri, handler)
        break
    }
  }

  _wrapCallback (callback) {
    return (request, response) => {
      if (!(request instanceof Request)) {
        throw Error('Expecting 1st parameter of request handler to be Request!')
      }
      if (!(response instanceof Response)) {
        throw Error(
          'Expecting 2nd parameter of request handler to be Response!'
        )
      }
      callback(request, response)
    }
  }

  _get (uri, handler) {
    throw new Error('WebServer._get(uri, handler) not implemented.')
  }

  _post (uri, handler) {
    throw new Error('WebServer._post(uri, handler) not implemented.')
  }

  _put (uri, handler) {
    throw new Error('WebServer._put(uri, handler) not implemented.')
  }

  _delete (uri, handler) {
    throw new Error('WebServer._delete(uri, handler) not implemented.')
  }

  _static (directory) {
    throw new Error('WebServer._static(directory) not implemented.')
  }

  start () {
    throw new Error('WebServer.start() not implemented.')
  }

  getPort () {
    return this._port
  }

  setPort (port) {
    this._port = port
    return this
  }

  get server () {
    throw new Error('WebServer.server() not implemented.')
  }
}
