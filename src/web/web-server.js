export default class WebServer {
  constructor (webServer, webApp) {
    this._webServer = webServer
    this.webApp = webApp
  }

  addRoutes (routes) {
    routes.forEach(route => this.addRoute(route))
  }

  addRoute (route) {
    let method = route.method
    let uri = route.uri
    let callback = route.callback
    switch (method.toUpperCase()) {
      case 'GET':
        this._webServer.get(uri, callback)
        break
      case 'POST':
        this._webServer.post(uri, callback)
        break
      case 'PUT':
        this._webServer.put(uri, callback)
        break
      case 'DELETE':
        this._webServer.delete(uri, callback)
        break
    }
  }

  start () {
    return this._webServer.start()
  }

  get port () {
    return this._webServer.port
  }

  get server () {
    return this._webServer
  }
}
