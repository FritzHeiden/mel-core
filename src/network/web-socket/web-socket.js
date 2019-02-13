module.exports = class WebSocket {
  constructor() {
    this._hasServer = false;
  }

  on(event, callback) {
    throw new Error(
      "Function WebSocket.on(event, callback) is not implemented!"
    );
  }

  emit(event, data) {
    throw new Error("Function WebSocket.emit(event, data) is not implemented!");
  }

  set server(server) {
    this._server = server;
    if (server) {
      this._hasServer = true;
    }
  }

  get server() {
    return this._server;
  }

  get hasServer() {
    return this._hasServer;
  }
};
