import crypto from 'crypto'

export default class NetworkAdapter {
  constructor (identity) {
    this._identity = identity || this._generateIdentity()
  }

  _generateIdentity () {
    console.log(crypto.randomBytes(20).toString('hex'))
  }
}
