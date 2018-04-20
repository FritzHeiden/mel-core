const OK = 200

export default class Response {
  constructor () {
    this._status = OK
  }

  getStatus () {
    return this._status
  }

  setStatus (status) {
    this._status = status
  }

  send (body) {
    throw new Error('Response.send(body) is not implemented!')
  }

  sendFile (relativeFilePath) {
    throw new Error('Response.sendFile(relativeFilePath) is not implemented!')
  }

  setHeader (field, value) {
    throw new Error('Response.setHeader(field, value) is not implemented!')
  }
}
