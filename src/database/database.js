import Serializer from 'src/database/serializer'
import Deserializer from 'src/database/deserializer'
import { limit } from 'semaphorejs'

const PERSIST_FILE = 0
const READ_FILE = 1
const PERSIST_TRACK = 2
const READ_TRACK = 3
const PERSIST_ALBUM = 4
const READ_ALBUM = 5
const PERSIST_ARTIST = 6
const READ_ARTIST = 7
const READ_ARTISTS = 8

export default class Database {
  constructor (database) {
    (async () => {
      this._serializer = new Serializer()
      this._deserializer = new Deserializer()
      this._jobs = []
      this._isRunning = false

      this._db = database
      await this._db.initialize()
      console.log('Database loaded.')

      this._createFile = limit(1, (fileJson) => this._db.insertFile(fileJson))
      this._readFile = limit(10, (filePath) => this._db.readFile(filePath))
      this._updateFile = limit(1, (fileJson) => this._db.updateFile(fileJson))
    })()
  }

  async persistFile (file) {
    let readFile = await this._readFile(file.path)
    if (readFile) {
      readFile = this._deserializer.deserializeFile(readFile)
      if (JSON.stringify(readFile.lastModified) !==
        JSON.stringify(file.lastModified)) {
        let fileJson = this._serializer.serializeFile(file)
        return this._updateFile(fileJson)
      } else {
        return Promise.resolve(null)
      }
    } else {
      let fileJson = this._serializer.serializeFile(file)
      return this._createFile(fileJson)
    }
  }

  async readFile (filePath) {
    return this._readFile(filePath)
  }

  async isFileUpToDate (file) {
    let readFile = await this._readFile(file.path)
    return JSON.stringify(readFile.lastModified) ===
      JSON.stringify(file.lastModified)
  }

  persistTrack (track) {
    return new Promise((resolve, reject) => {
      this._jobs.unshift({type: PERSIST_TRACK, object: track, resolve, reject})
      this._doNextJob()
    })
  }

  readTrack (trackId) {
    return new Promise((resolve, reject) => {
      this._jobs.unshift({type: READ_TRACK, object: trackId, resolve, reject})
      this._doNextJob()
    })
  }

  persistAlbum (album) {
    return new Promise((resolve, reject) => {
      this._jobs.unshift({type: PERSIST_ALBUM, object: album, resolve, reject})
      this._doNextJob()
    })
  }

  readAlbum (albumId) {
    return new Promise((resolve, reject) => {
      this._jobs.unshift({type: READ_ALBUM, object: albumId, resolve, reject})
      this._doNextJob()
    })
  }

  persistArtist (artist) {
    return new Promise((resolve, reject) => {
      this._jobs.unshift(
        {type: PERSIST_ARTIST, object: artist, resolve, reject})
      this._doNextJob()
    })
  }

  readArtist (artistId) {
    return new Promise((resolve, reject) => {
      this._jobs.unshift({type: READ_ARTIST, object: artistId, resolve, reject})
      this._doNextJob()
    })
  }

  readArtists () {
    return new Promise((resolve, reject) => {
      this._jobs.unshift({type: READ_ARTISTS, object: null, resolve, reject})
      this._doNextJob()
    })
  }

  _doNextJob () {
    setTimeout(() => {
      if (this._isRunning || this._jobs.length === 0) {
        return
      }

      this._isRunning = true
      let job = this._jobs.pop()
      let resolve = object => {
        this._isRunning = false
        this._doNextJob()
        job.resolve(object)
      }

      let reject = error => {
        this._isRunning = false
        this._doNextJob()
        job.reject(error)
      }
      switch (job.type) {
        case PERSIST_FILE:
          this._persistFile(job.object).then(resolve).catch(reject)
          break
        case READ_FILE:
          this._readFile(job.object).then(resolve).catch(reject)
          break
        case PERSIST_TRACK:
          this._persistTrack(job.object).then(resolve).catch(reject)
          break
        case READ_TRACK:
          this._readTrack(job.object).then(resolve).catch(reject)
          break
        case PERSIST_ALBUM:
          this._persistAlbum(job.object).then(resolve).catch(reject)
          break
        case READ_ALBUM:
          this._readAlbum(job.object).then(resolve).catch(reject)
          break
        case PERSIST_ARTIST:
          this._persistArtist(job.object).then(resolve).catch(reject)
          break
        case READ_ARTIST:
          this._readArtist(job.object).then(resolve).catch(reject)
          break
        case READ_ARTISTS:
          this._readArtists().then(resolve).catch(reject)
          break
      }
    }, 1)
  }

  _persistTrack (track) {
    return this._db.readTrack(track.id)
      .then(exists => {
        if (exists) return Promise.resolve(null)
        let trackJson = this._serializer.serializeTrack(track)
        return this._db.insertTrack(trackJson)
      })
  }

  _readTrack (trackId) {
    return this._db.readTrack(trackId)
      .then(
        track => Promise.resolve(this._deserializer.deserializeTrack(track)))
  }

  _persistAlbum (album) {
    return this._db.readAlbum(album.id)
      .then(exists => {
        if (exists) return Promise.resolve(null)
        let albumJson = this._serializer.serializeAlbum(album)
        return this._db.insertAlbum(albumJson)
      })
  }

  _readAlbum (albumId) {
    return this._db.readAlbum(albumId)
      .then(
        album => Promise.resolve(this._deserializer.deserializeAlbum(album)))
  }

  _persistArtist (artist) {
    return this._db.readArtist(artist.id)
      .then(exists => {
        if (exists) return Promise.resolve(null)
        let artistJson = this._serializer.serializeArtist(artist)
        return this._db.insertArtist(artistJson)
      })
  }

  _readArtist (artistId) {
    return this._db.readArtist(artistId)
      .then(
        artist => Promise.resolve(this._deserializer.deserializeArtist(artist)))
  }

  _readArtists () {
    return this._db.readArtists()
      .then(artists => artists.map(
        artist => this._deserializer.deserializeArtist(artist)))
  }
}
