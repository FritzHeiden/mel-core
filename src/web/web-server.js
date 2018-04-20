import Response from '../network/response'
import Route from './route'
import Request from '../network/request'

export default class WebServer {
  addRoutes (routes) {
    routes.forEach(route => this.addRoute(route))
  }

  addRoute (route) {
    const { GET, POST, PUT, DELETE } = Route
    let method = route.getMethod()
    let uri = route.getUri()
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

  addStaticDirectory (directory) {
    this._static(directory)
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

  get port () {
    throw new Error('WebServer.port() not implemented.')
  }

  get server () {
    throw new Error('WebServer.server() not implemented.')
  }
}
