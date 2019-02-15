const Serializer = require("../utils/serializer");
const Deserializer = require("../utils/deserializer");
const JobQueue = require("../utils/job-qeue");
const Constants = require("../constants");

const IDENTITY = "id";
const READ_JOB_GROUP = "read";
const { MAX_ACCESS_JOBS, MAX_GROUP_JOBS } = Constants.database;

const TRACKS_DB_NAME = "tracks";
const ALBUMS_DB_NAME = "albums";
const ARTISTS_DB_NAME = "artists";
const FILES_DB_NAME = "files";
const DB_META_NAME = "meta";

module.exports = class Database {
  constructor() {
    // Tracks
    this._tracksAccessQueue = new JobQueue(MAX_ACCESS_JOBS, {
      groupLimit: MAX_GROUP_JOBS
    });
    this._queueTracksAccess = this._tracksAccessQueue.queueJob.bind(
      this._tracksAccessQueue
    );
    // Albums
    this._albumsAccessQueue = new JobQueue(MAX_ACCESS_JOBS, {
      groupLimit: MAX_GROUP_JOBS
    });
    this._queueAlbumsAccess = this._albumsAccessQueue.queueJob.bind(
      this._albumsAccessQueue
    );
    // Artists
    this._artistsAccessQueue = new JobQueue(MAX_ACCESS_JOBS, {
      groupLimit: MAX_GROUP_JOBS
    });
    this._queueArtistsAccess = this._artistsAccessQueue.queueJob.bind(
      this._artistsAccessQueue
    );
    // Files
    this._filesAccessQueue = new JobQueue(MAX_ACCESS_JOBS, {
      groupLimit: MAX_GROUP_JOBS
    });
    this._queueFilesAccess = this._filesAccessQueue.queueJob.bind(
      this._filesAccessQueue
    );
  }

  async initialize() {
    this._tracks = await this._loadDatabase(TRACKS_DB_NAME);
    this._albums = await this._loadDatabase(ALBUMS_DB_NAME);
    this._artists = await this._loadDatabase(ARTISTS_DB_NAME);
    this._files = await this._loadDatabase(FILES_DB_NAME);
    this._meta = await this._loadDatabase(DB_META_NAME);

    // this._identity = await this._readDatabaseMetaData(IDENTITY);
    // if (!this._identity) {
    //   this._identity = this._generateIdentity();
    //   await this._updateDatabaseMetaData(IDENTITY, this._identity);
    // }
  }

  _generateIdentity() {
    let currentDate = new Date().valueOf().toString();
    let random = Math.random().toString();
    return "tmp";
  }

  get identity() {
    return this._identity;
  }

  // General
  async _loadDatabase(filePath) {
    throw new Error("Database._loadDatabase(filePath) is not implemented!");
  }

  // Track
  async createTrack(track, priority) {
    return this._queueTracksAccess(() => this._createTrack(track), {
      priority
    });
  }

  async _createTrack(track) {
    const trackJson = Serializer.serializeTrack(track);
    return this._tracks.insert(trackJson);
  }

  async readTrack(trackId, priority) {
    return this._queueTracksAccess(() => this._readTrack(trackId), {
      priority,
      group: READ_JOB_GROUP
    });
  }

  async _readTrack(trackId) {
    const trackJson = await this._tracks.findOne({ id: trackId });
    return Deserializer.deserializeTrack(trackJson);
  }

  async updateTrack(track, priority) {
    return this._queueTracksAccess(() => this._updateTrack(track), {
      priority
    });
  }

  async _updateTrack(track) {
    const trackJson = Serializer.serializeTrack(track);
    return this._tracks.update({ id: track.getId() }, trackJson);
  }

  async complementTrack(track, priority) {
    return this._queueTracksAccess(() => this._complementTrack(track), {
      priority
    });
  }

  async _complementTrack(track) {
    const readTrack = await this._readTrack(track.getId());
    if (readTrack) {
      await this._updateTrack(readTrack.complement(track));
    } else {
      await this._createTrack(track);
    }
  }

  // Album
  async createAlbum(album, priority) {
    return this._queueAlbumsAccess(() => this._createAlbum(album), {
      priority
    });
  }

  async _createAlbum(album) {
    const albumJson = Serializer.serializeAlbum(album);
    return this._albums.insert(albumJson);
  }

  async readAlbum(albumId, priority) {
    return this._queueAlbumsAccess(() => this._readAlbum(albumId), {
      priority,
      group: READ_JOB_GROUP
    });
  }

  async _readAlbum(albumId) {
    const albumJson = await this._albums.findOne({ id: albumId });
    return Deserializer.deserializeAlbum(albumJson);
  }

  async updateAlbum(album, priority) {
    return this._queueAlbumsAccess(() => this._updateAlbum(album), {
      priority
    });
  }

  async _updateAlbum(album) {
    const albumJson = Serializer.serializeAlbum(album);
    return this._albums.update({ id: album.getId() }, albumJson);
  }

  async complementAlbum(album, priority) {
    return this._queueAlbumsAccess(() => this._complementAlbum(album), {
      priority
    });
  }

  async _complementAlbum(album) {
    const readAlbum = await this._readAlbum(album.getId());
    if (readAlbum) {
      await this._updateAlbum(readAlbum.complement(album));
    } else {
      await this._createAlbum(album);
    }
  }

  // Artist
  async createArtist(artist, priority) {
    return this._queueArtistsAccess(() => this._createArtist(artist), {
      priority
    });
  }

  async _createArtist(artist) {
    const artistJson = Serializer.serializeArtist(artist);
    return this._artists.insert(artistJson);
  }

  async readArtist(artistId, priority) {
    return this._queueArtistsAccess(() => this._readArtist(artistId), {
      priority,
      group: READ_JOB_GROUP
    });
  }

  async _readArtist(artistId) {
    let artistJson = await this._artists.findOne({ id: artistId });
    return Deserializer.deserializeArtist(artistJson);
  }

  async updateArtist(artist, priority) {
    return this._queueArtistsAccess(() => this._updateArtist(artist), {
      priority
    });
  }

  async _updateArtist(artist) {
    const artistJson = Serializer.serializeArtist(artist);
    return this._artists.update({ id: artist.getId() }, artistJson);
  }

  async readArtists(priority) {
    return this._queueArtistsAccess(() => this._readArtists(), {
      priority,
      group: READ_JOB_GROUP
    });
  }

  async _readArtists() {
    const artistsJson = await this._artists.find({});
    return Deserializer.deserializeArtists(artistsJson);
  }

  async complementArtist(artist, priority) {
    return this._queueArtistsAccess(
      async () => this._complementArtist(artist),
      {
        priority
      }
    );
  }

  async _complementArtist(artist) {
    const readArtist = await this._readArtist(artist.getId());
    if (readArtist) {
      await this._updateArtist(readArtist.complement(artist));
    } else {
      await this._createArtist(artist);
    }
  }

  // File
  async createFile(file, priority) {
    return this._queueFilesAccess(() => this._createFile(file), {
      priority
    });
  }

  async _createFile(file) {
    const fileJson = Serializer.serializeFile(file);
    return this._files.insert(fileJson);
  }

  async readFile(filePath, priority) {
    return this._queueFilesAccess(() => this._readFile(filePath), {
      priority,
      group: READ_JOB_GROUP
    });
  }

  async _readFile(filePath) {
    const fileJson = await this._files.findOne({ path: filePath });
    return Deserializer.deserializeFile(fileJson);
  }

  async readFilesByTrackId(trackId, priority) {
    return this._queueFilesAccess(() => this._readFilesByTrackId(trackId), {
      priority,
      group: READ_JOB_GROUP
    });
  }

  async _readFilesByTrackId(trackId) {
    const filesJson = await this._files.find({ trackId });
    return Deserializer.deserializeFiles(filesJson);
  }

  async updateFile(file, priority) {
    return this._queueFilesAccess(() => this._updateFile(file), {
      priority
    });
  }

  async _updateFile(file) {
    const fileJson = Serializer.serializeFile(file);
    return this._files.update({ path: file.getPath }, fileJson);
  }

  // Meta Data
  async _readDatabaseMetaData(key) {
    throw new Error("Database._readDatabaseMetadata(key) not implemented!");
  }

  async _updateDatabaseMetaData(key, value) {
    throw new Error(
      "Database._updateDatabaseMetaData(key, value) not implemented!"
    );
  }
};
