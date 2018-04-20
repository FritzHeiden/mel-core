import Serializer from '../utils/serializer'
import Deserializer from '../utils/deserializer'
import JobQueue from '../utils/job-qeue'

const IDENTITY = 'id'
const MAX_READING_JOBS = 5
const MAX_WRITING_JOBS = 1

export default class Database {
  constructor () {
    this._readingQueue = new JobQueue(MAX_READING_JOBS)
    this._queueReading = this._readingQueue.queueJob.bind(this._readingQueue)
    this._writingQueue = new JobQueue(MAX_WRITING_JOBS)
    this._queueWriting = this._writingQueue.queueJob.bind(this._writingQueue)
    this._persistingFileQueue = new JobQueue(1)
    this._queuePersistingFile = this._persistingFileQueue.queueJob.bind(
      this._persistingFileQueue
    )
    this._persistingTrackQueue = new JobQueue(1)
    this._queuePersistingTrack = this._persistingTrackQueue.queueJob.bind(
      this._persistingTrackQueue
    )
    this._persistingAlbumQueue = new JobQueue(1)
    this._queuePersistingAlbum = this._persistingAlbumQueue.queueJob.bind(
      this._persistingAlbumQueue
    )
    this._persistingArtistQueue = new JobQueue(1)
    this._queuePersistingArtist = this._persistingArtistQueue.queueJob.bind(
      this._persistingArtistQueue
    )
  }

  async initialize () {
    await this._loadDatabase()

    this._identity = await this._readDatabaseMetaData(IDENTITY)
    if (!this._identity) {
      this._identity = this._generateIdentity()
      await this._updateDatabaseMetaData(IDENTITY, this._identity)
    }
  }

  _generateIdentity () {
    let currentDate = new Date().valueOf().toString()
    let random = Math.random().toString()
    return 'tmp'
  }

  get identity () {
    return this._identity
  }

  // Track //

  async createTrack (track) {
    let trackJson = Serializer.serializeTrack(track)
    return this._queueWriting(() => this._createTrack(trackJson))
  }

  async _createTrack (trackJson) {
    throw new Error('Database._createTrack(trackJson) not implemented!')
  }

  async readTrack (trackId) {
    let trackJson = await this._queueReading(() => this._readTrack(trackId))
    return Deserializer.deserializeTrack(trackJson)
  }

  async _readTrack (trackId) {
    throw new Error('Database._readTrack(trackId) not implemented!')
  }

  async updateTrack (track) {
    let trackJson = Serializer.serializeTrack(track)
    return this._queueWriting(() => this._updateTrack(trackJson))
  }

  async _updateTrack (trackJson) {
    throw new Error('Database._updateTrack(trackJson) not implemented!')
  }

  async persistTrack (track) {
    return this._queuePersistingTrack(() => this._persistTrack(track))
  }

  async _persistTrack (track) {
    try {
      if (await this.readTrack(track.id)) {
        return this.updateTrack(track)
      } else {
        return this.createTrack(track)
      }
    } catch (error) {
      throw new Error(`Could not persist track: ${error}`)
    }
  }

  // Album

  async createAlbum (album) {
    let albumJson = Serializer.serializeAlbum(album)
    return this._queueWriting(() => this._createAlbum(albumJson))
  }

  async _createAlbum (albumJson) {
    throw new Error('Database._createAlbum(albumJson) not implemented!')
  }

  async readAlbum (albumId) {
    let albumJson = await this._queueReading(() => this._readAlbum(albumId))
    return Deserializer.deserializeAlbum(albumJson)
  }

  async _readAlbum (albumId) {
    throw new Error('Database._readAlbum(albumId) not implemented!')
  }

  async updateAlbum (album) {
    let albumJson = Serializer.serializeAlbum(album)
    return this._queueWriting(() => this._updateAlbum(albumJson))
  }

  async _updateAlbum (albumJson) {
    throw new Error('Database._updateAlbum(albumJson) not implemented!')
  }

  async persistAlbum (album) {
    return this._queuePersistingAlbum(() => this._persistAlbum(album))
  }

  async _persistAlbum (album) {
    try {
      let readAlbum = await this.readAlbum(album.id)
      if (readAlbum) {
        readAlbum.addTracks(album.tracks)
        readAlbum.addFeatureArtists(album.featureArtists)
        return this.updateAlbum(readAlbum)
      } else {
        return this.createAlbum(album)
      }
    } catch (error) {
      throw new Error(`Could not persist album: ${error}`)
    }
  }

  // Artist

  async createArtist (artist) {
    let artistJson = Serializer.serializeArtist(artist)
    return this._queueWriting(() => this._createArtist(artistJson))
  }

  async _createArtist (artistJson) {
    throw new Error('Database._createArtist(artistJson) not implemented!')
  }

  async readArtist (artistId) {
    let artistJson = await this._queueReading(() => this._readArtist(artistId))
    return Deserializer.deserializeArtist(artistJson)
  }

  async _readArtist (artistId) {
    throw new Error('Database._readArtist(artistId) not implemented!')
  }

  async updateArtist (artist) {
    let artistJson = Serializer.serializeArtist(artist)
    return this._queueWriting(() => this._updateArtist(artistJson))
  }

  async _updateArtist (artistJson) {
    throw new Error('Database._updateArtist(artistJson) not implemented!')
  }

  async readArtists () {
    let artistsJson = await this._queueReading(() => this._readArtists())
    return Deserializer.deserializeArtists(artistsJson)
  }

  async _readArtists () {
    throw new Error('Database._readArtists() not implemented!')
  }

  async persistArtist (artist) {
    return this._queuePersistingArtist(() => this._persistArtist(artist))
  }

  async _persistArtist (artist) {
    try {
      let readArtist = await this.readArtist(artist.id)
      if (readArtist) {
        readArtist.addAlbums(artist.albums)
        readArtist.addFeatureAlbums(artist.featureAlbums)
        await this.updateArtist(readArtist)
      } else {
        await this.createArtist(artist)
      }
    } catch (error) {
      throw new Error(`Could not persist artist:\n${error}`)
    }
  }

  // General

  async _loadDatabase () {
    throw new Error('Database._loadDatabase() is not implemented!')
  }

  // File

  async createFile (file) {
    let fileJson = Serializer.serializeFile(file)
    return this._queueWriting(() => this._createFile(fileJson))
  }

  async _createFile (fileJson) {
    throw new Error('Database._createFile(fileJson) not implemented!')
  }

  async readFile (filePath) {
    let fileJson = await this._queueReading(() => this._readFile(filePath))
    return Deserializer.deserializeFile(fileJson)
  }

  async _readFile (filePath) {
    throw new Error('Database._readFile(filePath) not implemented!')
  }

  async readFilesByTrackId (trackId) {
    let filesJson = await this._queueReading(() =>
      this._readFilesByTrackId(trackId)
    )
    return Deserializer.deserializeFiles(filesJson)
  }

  async _readFilesByTrackId (trackId) {
    throw new Error('Database._readFilesByTrackId(trackId) not implemented!')
  }

  async updateFile (file) {
    let fileJson = Serializer.serializeFile(file)
    return this._queueWriting(() => this._updateFile(fileJson))
  }

  async _updateFile (fileJson) {
    throw new Error('Database._updateFile(fileJson) not implemented!')
  }

  async persistFile (file) {
    return this._queuePersistingFile(() => this._persistFile(file))
  }

  async _persistFile (file) {
    if (!await this.readFile(file.id)) {
      return this.createFile(file)
    } else {
      return this.updateFile(file)
    }
  }

  // Meta Data

  async _readDatabaseMetaData (key) {
    throw new Error('Database._readDatabaseMetadata(key) not implemented!')
  }

  async _updateDatabaseMetaData (key, value) {
    throw new Error(
      'Database._updateDatabaseMetaData(key, value) not implemented!'
    )
  }
}
