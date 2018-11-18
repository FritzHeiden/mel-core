const File = require('../data/files/file')
const UTF8Transcoder = require('../utils/utf8-transcoder')
const JsMediaTags = require('jsmediatags')
const ArrayBufferFileReader = require('./array-buffer-file-reader')

module.exports = class Id3Tagger {
  async readTags (file) {
    if (!(file instanceof File)) {
      throw new Error('First parameter must be of type File!')
    }

    JsMediaTags.Config.addFileReader(ArrayBufferFileReader)

    return new Promise((resolve, reject) => {
      JsMediaTags.read(file.getBuffer(), {
        onSuccess: ({ tags }) => {
          let trackTitle = null
          if (tags.TIT2) trackTitle = tags.TIT2.data
          let artistName = null
          if (tags.TPE1) artistName = tags.TPE1.data
          let albumArtistName = null
          if (tags.TPE2) albumArtistName = tags.TPE2.data
          let year = null
          if (tags.TDAT) year = tags.TDAT.data
          if (!year && tags.TYER) year = tags.TYER.data
          if (!year && tags.TDRC) year = tags.TDRC.data
          let trackNumber = null
          if (tags.TRCK) trackNumber = tags.TRCK.data
          let discNumber = null
          if (tags.TPOS) discNumber = tags.TPOS.data
          let albumTitle = null
          if (tags.TALB) albumTitle = tags.TALB.data
          let albumCover = null
          if (tags.APIC) albumCover = tags.APIC.data

          resolve({
            trackTitle,
            artistName,
            albumArtistName,
            albumTitle,
            year,
            trackNumber,
            discNumber,
            albumCover
          })
        },
        onError: error => {
          console.log(error)
        }
      })
    })

    // const tags = ID3Parser.parse(new Uint8Array(file.getBuffer()))

    // let dataView = new DataView(file.getBuffer())
    // return this._readID3v2(dataView)
  }

  _synchsafeIntToInt (synchsafeInt) {
    let string = synchsafeInt.toString(2)
    let missing = 32 - string.length
    for (let i = 0; i < missing; i++) {
      string = '0' + string
    }

    let intString = ''

    for (let i = 1; i < 32; i += 8) {
      intString += string.substr(i, 7)
    }

    return parseInt(intString, 2)
  }

  _readID3v2Frames (dataView, header) {
    let i = 10

    let frames = []
    while (i < header.size) {
      let frameId = ''
      for (let j = 0; j < 4; j++) {
        frameId += String.fromCharCode(dataView.getUint8(i))
        i++
      }

      let size = dataView.getUint32(i)
      i += 4

      let statusFlag = dataView.getUint8(i).toString(2)
      i++
      let gap = 8 - statusFlag.length
      for (let j = 0; j < gap; j++) {
        statusFlag = '0' + statusFlag
      }
      statusFlag = {
        tag_alter_preservation: statusFlag[1] === '1',
        file_alter_preservation: statusFlag[2] === '1',
        read_only: statusFlag[3] === '1'
      }

      let formatDescription = dataView.getUint8(i).toString(2)
      i++
      gap = 8 - formatDescription.length
      for (let j = 0; j < gap; j++) {
        formatDescription = '0' + formatDescription
      }
      formatDescription = {
        grouping_identity: formatDescription[1] === '1',
        compression: formatDescription[4] === '1',
        encryption: formatDescription[5] === '1',
        unsynchronisation: formatDescription[6] === '1',
        data_length_indicator: formatDescription[7] === '1'
      }

      let value = ''
      if (frameId.startsWith('T') && frameId !== 'TXXX') {
        let encoding = dataView.getUint8(i).toString(16)
        switch (encoding) {
          case '0':
            encoding = 'ISO-8859-1'
            break
          case '1':
            encoding = 'UTF-16'
            break
          case '2':
            encoding = 'UTF-16BE'
            break
          case '3':
            encoding = 'UTF-8'
            break
        }

        i++
        size--

        if (encoding === 'UTF-16' || encoding === 'UTF-16BE') {
          let hex1 = dataView.getUint8(i).toString(16)
          let hex2 = dataView.getUint8(i + 1).toString(16)
          if (
            (hex1 === 'ff' && hex2 === 'fe') ||
            (hex1 === 'fe' && hex2 === 'ff')
          ) {
            i += 2
            size -= 2
          }
        }

        let codes = []
        for (let j = i; j < i + size; j++) {
          switch (encoding) {
            case 'UTF-8':
            case 'ISO-8859-1':
              codes.push(dataView.getUint8(j))
              break
            case 'UTF-16': {
              codes.push(dataView.getUint16(j, true))
              j++
              break
            }
            case 'UTF-16BE': {
              codes.push(dataView.getUint16(j))
              j++
              break
            }
          }
        }
        codes = new Uint8Array(codes)

        switch (encoding) {
          case 'UTF-8':
          case 'ISO-8859-1':
            value = UTF8Transcoder.decodeUtf8(codes, true)
            break
          case 'UTF-16':
          case 'UTF-16BE':
            value = String.fromCodePoint(...codes)
            break
        }
      } else if (frameId === 'APIC') {
      }

      i += size
      frames.push({ frameId, value })
    }
    return frames
  }

  _readID3v2Header (dataView) {
    let identifier = ''
    for (let i = 0; i < 3; i++) {
      let byte = dataView.getUint8(i)
      identifier += String.fromCharCode(byte)
    }

    let version = `${dataView
      .getUint8(3)
      .toString(16)
      .toUpperCase()}.${dataView
      .getUint8(4)
      .toString(16)
      .toUpperCase()}`

    let flags = dataView.getUint8(5).toString(2)
    let gap = 8 - flags.length
    for (let i = 0; i < gap; i++) {
      flags = '0' + flags
    }

    let unsynchronized = flags[0] === '1'
    let extended = flags[1] === '1'
    let experimental = flags[2] === '1'
    let footer = flags[3] === '1'

    let size = this._readSynchsafeInteger(dataView, 6)

    return {
      identifier,
      version,
      unsynchronized,
      extended,
      experimental,
      footer,
      size
    }
  }

  _readSynchsafeInteger (dataView, offset) {
    let size1 = dataView.getUint8(offset).toString(2)
    let gap = 7 - size1.length
    for (let i = 0; i < gap; i++) {
      size1 = '0' + size1
    }

    let size2 = dataView.getUint8(offset + 1).toString(2)
    gap = 7 - size2.length
    for (let i = 0; i < gap; i++) {
      size2 = '0' + size2
    }

    let size3 = dataView.getUint8(offset + 2).toString(2)
    gap = 7 - size3.length
    for (let i = 0; i < gap; i++) {
      size3 = '0' + size3
    }

    let size4 = dataView.getUint8(offset + 3).toString(2)
    gap = 7 - size4.length
    for (let i = 0; i < gap; i++) {
      size4 = '0' + size4
    }

    return parseInt(size1 + size2 + size3 + size4, 2)
  }

  _readID3v2 (dataView) {
    let header = this._readID3v2Header(dataView)
    let frames = this._readID3v2Frames(dataView, header)

    // console.log(header);
    // console.log(frames)
    let tags = {}
    for (let i = 0; i < frames.length; i++) {
      let frame = frames[i]
      switch (frame.frameId) {
        case 'TIT2':
          tags.trackTitle = frame.value
          break
        case 'TPE1':
          tags.artistName = frame.value
          break
        case 'TPE2':
          tags.albumArtistName = frame.value
          break
        case 'TYER':
          tags.year = frame.value
          break
        case 'TRCK':
          tags.trackNumber = frame.value
          break
        case 'TPOS':
          tags.discNumber = frame.value
          break
        case 'TALB':
          tags.albumTitle = frame.value
          break
      }
    }
    return tags
  }

  _readString (dataView, offset, start, end) {
    let string = ''
    for (let i = offset + start; i < offset + end; i++) {
      let byte = dataView.getUint8(i)
      string += String.fromCharCode(byte)
    }
    return string
  }

  _readID3v1 (dataView) {
    let tags = {
      title: '',
      artist: '',
      album: '',
      year: '',
      comment: '',
      zeroByte: '',
      track: '',
      genre: ''
    }

    let offset = dataView.byteLength - 128
    let header = this._readString(dataView, offset, 0, 3)
    if (header !== 'TAG') {
      return tags
    }
    let title = this._readString(dataView, offset, 3, 33).trim()
    let artist = this._readString(dataView, offset, 3, 33)
    let album = this._readString(dataView, offset, 33, 63)
    let year = this._readString(dataView, offset, 63, 93)
    let comment = this._readString(dataView, offset, 93, 97)
    let zeroByte = this._readString(dataView, offset, 97, 126)
    let track = this._readString(dataView, offset, 126, 127)
    let genre = this._readString(dataView, offset, 127, 128)

    return { title, artist, album, year, comment, zeroByte, track, genre }
  }
}
