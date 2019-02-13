const Deserializer = require("../../utils/deserializer");

const GET = "GET";

module.exports = class MelHttpService {
  constructor(host, port, { webRoot, protocol }) {
    this._host = host;
    this._port = port;
    this._webRoot = "/";
    if (webRoot) this._webRoot = webRoot;
    this._protocol = "http";
    if (protocol) this._protocol = protocol;
    this._connections = [];
  }

  getArtists() {
    return new Promise((resolve, reject) =>
      this._sendRequest(GET, "api/artists")
        .then(response =>
          resolve(Deserializer.deserializeArtists(JSON.parse(response.body)))
        )
        .catch(err => reject(err))
    );
  }

  downloadTrack(trackId, progressHandler) {
    let options = {
      responseType: "arraybuffer"
    };
    if (progressHandler) {
      options.progressHandler = progressHandler;
    }
    return new Promise((resolve, reject) => {
      this._sendRequest(GET, `api/tracks/${trackId}/data`, options)
        .then(response => resolve(response.body))
        .catch(error => reject(error));
    });
  }

  abortTrackDownload(trackId) {
    this._cancelConnection(GET, `api/tracks/${trackId}/data`);
  }

  async getTrackDataInfo(trackId) {
    const response = await this._sendRequest(
      "HEAD",
      `api/tracks/${trackId}/data`
    );
    return {
      size: parseInt(response.headers["content-length"])
    };
  }

  async getAlbumCover(albumId) {
    const response = await this._sendRequest(
      "GET",
      `api/albums/${albumId}/cover`,
      {
        responseType: "arraybuffer"
      }
    );
    return response.body;
  }

  getAlbumCoverUrl(albumId) {
    return `${this._webRoot}api/albums/${albumId}/cover`;
  }

  _cancelConnection(method, uri) {
    this._connections
      .filter(connection => {
        return connection.method === method && connection.uri === uri;
      })
      .forEach(({ request }) => request.abort());
  }

  _addConnection(method, uri, request) {
    this._connections.push({ method, uri, request });
  }

  async _sendRequest(method, uri, { responseType, progressHandler } = {}) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      this._addConnection(method, uri, request);
      request.addEventListener("load", event => {
        if (request.status === 200) {
          resolve({
            body: request.response,
            headers: this._mapHeaders(request)
          });
        } else {
          reject(request.status);
        }
      });

      if (progressHandler) {
        request.addEventListener("progress", event => {
          progressHandler(event.loaded, event.total);
        });
      }

      if (responseType) {
        request.responseType = responseType;
      }

      request.open(
        method,
        `${this._protocol}://${this._host}:${this._port}${this._webRoot}${uri}`,
        true
      );
      request.send();
    });
  }

  _mapHeaders(request) {
    let headers = {};
    request
      .getAllResponseHeaders()
      .split("\n")
      .forEach(header => {
        const { 0: field, 1: value } = header.split(":");
        headers[field.toLowerCase()] = (value + "").trim();
      });

    return headers;
  }
};
