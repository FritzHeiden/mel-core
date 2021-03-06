'use strict'

var _createClass = (function () {
  function defineProperties (target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

var InternalDecodedString = (function () {
  function InternalDecodedString (value, bytesReadCount) {
    _classCallCheck(this, InternalDecodedString)

    this._value = value
    this.bytesReadCount = bytesReadCount
    this.length = value.length
  }

  _createClass(InternalDecodedString, [
    {
      key: 'toString',
      value: function toString () {
        return this._value
      }
    }
  ])

  return InternalDecodedString
})()

var StringUtils = {
  readUTF16String: function (bytes, bigEndian, maxBytes) {
    var ix = 0
    var offset1 = 1,
      offset2 = 0

    maxBytes = Math.min(maxBytes || bytes.length, bytes.length)

    if (bytes[0] == 0xfe && bytes[1] == 0xff) {
      bigEndian = true
      ix = 2
    } else if (bytes[0] == 0xff && bytes[1] == 0xfe) {
      bigEndian = false
      ix = 2
    }
    if (bigEndian) {
      offset1 = 0
      offset2 = 1
    }

    var arr = []
    for (var j = 0; ix < maxBytes; j++) {
      var byte1 = bytes[ix + offset1]
      var byte2 = bytes[ix + offset2]
      var word1 = (byte1 << 8) + byte2
      ix += 2
      if (word1 == 0x0000) {
        break
      } else if (byte1 < 0xd8 || byte1 >= 0xe0) {
        arr[j] = String.fromCharCode(word1)
      } else {
        var byte3 = bytes[ix + offset1]
        var byte4 = bytes[ix + offset2]
        var word2 = (byte3 << 8) + byte4
        ix += 2
        arr[j] = String.fromCharCode(word1, word2)
      }
    }
    return new InternalDecodedString(arr.join(''), ix)
  },

  readUTF8String: function (bytes, maxBytes) {
    var ix = 0
    maxBytes = Math.min(maxBytes || bytes.length, bytes.length)

    if (bytes[0] == 0xef && bytes[1] == 0xbb && bytes[2] == 0xbf) {
      ix = 3
    }

    var arr = []
    for (var j = 0; ix < maxBytes; j++) {
      var byte1 = bytes[ix++]
      if (byte1 == 0x00) {
        break
      } else if (byte1 < 0x80) {
        arr[j] = String.fromCharCode(byte1)
      } else if (byte1 >= 0xc2 && byte1 < 0xe0) {
        var byte2 = bytes[ix++]
        arr[j] = String.fromCharCode(((byte1 & 0x1f) << 6) + (byte2 & 0x3f))
      } else if (byte1 >= 0xe0 && byte1 < 0xf0) {
        var byte2 = bytes[ix++]
        var byte3 = bytes[ix++]
        arr[j] = String.fromCharCode(
          ((byte1 & 0xff) << 12) + ((byte2 & 0x3f) << 6) + (byte3 & 0x3f)
        )
      } else if (byte1 >= 0xf0 && byte1 < 0xf5) {
        var byte2 = bytes[ix++]
        var byte3 = bytes[ix++]
        var byte4 = bytes[ix++]
        var codepoint =
          ((byte1 & 0x07) << 18) +
          ((byte2 & 0x3f) << 12) +
          ((byte3 & 0x3f) << 6) +
          (byte4 & 0x3f) -
          0x10000
        arr[j] = String.fromCharCode(
          (codepoint >> 10) + 0xd800,
          (codepoint & 0x3ff) + 0xdc00
        )
      }
    }
    return new InternalDecodedString(arr.join(''), ix)
  },

  readNullTerminatedString: function (bytes, maxBytes) {
    var arr = []
    maxBytes = maxBytes || bytes.length
    for (var i = 0; i < maxBytes;) {
      var byte1 = bytes[i++]
      if (byte1 == 0x00) {
        break
      }
      arr[i - 1] = String.fromCharCode(byte1)
    }
    return new InternalDecodedString(arr.join(''), i)
  }
}

module.exports = StringUtils
