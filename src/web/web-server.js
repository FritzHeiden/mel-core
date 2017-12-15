export default class WebServer {
    constructor(webServer, webApp) {
        this.webServer = webServer;
        this.webApp = webApp;
    }

    addRoutes(routes) {
        routes.forEach(route => this.addRoute(route));
    }

    addRoute(route) {
        let method = route.method;
        let uri = route.uri;
        let callback = route.callback;
        switch (method.toUpperCase()) {
            case "GET": this.webServer.get(uri, callback); break;
            case "POST": this.webServer.post(uri, callback); break;
            case "PUT": this.webServer.put(uri, callback); break;
            case "DELETE": this.webServer.delete(uri, callback); break;
        }
    }

    start() {
        return this.webServer.start();
    }

    get port() {
        return this.webServer.port;
    }
}