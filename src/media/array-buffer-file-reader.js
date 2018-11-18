const MediaFileReader = require('jsmediatags/build2/MediaFileReader')

class ArrayBufferFileReader extends MediaFileReader {
  constructor (file) {
    super()
    this._dataView = new DataView(file)
  }

  init (callbacks) {
    callbacks.onSuccess()
  }

  getSize () {
    return this._dataView.byteLength
  }

  loadRange (range, callbacks) {
    callbacks.onSuccess()
  }
  getBytesLoaded (param) {
    console.log('getBytesLoaded NOT IMPLEMENTED!')
  }
  getByteAt (offset) {
    return this._dataView.getUint8(offset)
  }
}

ArrayBufferFileReader.canReadFile = function (file) {
  return file instanceof ArrayBuffer
}

module.exports = ArrayBufferFileReader
