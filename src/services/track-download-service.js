import JSZip from 'jszip'
import EventEmitter from '../utils/event-emitter'

const DOWNLOAD_LIST_CHANGE = 'download_list_change'
const TOTAL_SIZE_CHANGE = 'total_size_change'
const TOTAL_LOADED_CHANGE = 'total_loaded_change'
const CURRENT_TRACK_CHANGE = 'current_track_change'
const STATE_CHANGE = 'state_change'

const PENDING = 'pending'
const DOWNLOADING = 'downloading'
const ZIPPING = 'zipping'
const DONE = 'done'

class DownloadItem {
  constructor (track, size) {
    this._eventEmitter = new EventEmitter()
    this._track = track
    if (size instanceof Promise) {
      this._size = null
      size.then(actualSize => this._setSize(actualSize))
    } else {
      this._size = size
    }
  }

  _setSize (size) {
    this._size = size
    this._eventEmitter.invokeAll('size_change', size)
  }

  addOnSizeChangeListener (listener) {
    this._eventEmitter.on('size_change', listener)
  }

  clearListeners () {
    this._eventEmitter.clearListeners()
  }

  getTrack () {
    return this._track
  }

  getSize () {
    return this._size
  }
}

class TrackDownloadService {
  constructor (melHttpService) {
    this._artists = []
    this._melHttpService = melHttpService
    this._eventEmitter = new EventEmitter()
    this._totalSize = 0
    this._totalLoaded = 0
    this._currentTrack = null
    this._state = PENDING
    this._queue = []
    this.addOnDownloadListChangedListener(() => this._setState(PENDING))
  }

  get artists () {
    return this._artists
  }

  addOnDownloadListChangedListener (listener) {
    this._eventEmitter.on(DOWNLOAD_LIST_CHANGE, listener)
  }

  addOnTotalSizeChangedListener (listener) {
    this._eventEmitter.on(TOTAL_SIZE_CHANGE, listener)
  }

  addOnCurrentTrackChangedListener (listener) {
    this._eventEmitter.on(CURRENT_TRACK_CHANGE, listener)
  }

  addOnStateChangedListener (listener) {
    this._eventEmitter.on(STATE_CHANGE, listener)
  }

  addArtist (artist) {
    artist.albums.forEach(album => this.addAlbum(album))
  }

  addAlbum (album) {
    album.tracks.forEach(track => this.addTrack(track))
  }

  addTrack (track) {
    if (!this._queueContainsTrack(track.id)) {
      let downloadItem = new DownloadItem(track, this._fetchTrackSize(track.id))
      downloadItem.addOnSizeChangeListener(this._increaseTotalSize.bind(this))
      this._queue.push(downloadItem)
      this._eventEmitter.invokeAll(DOWNLOAD_LIST_CHANGE, this._queue)
    }
  }

  _queueContainsTrack (trackId) {
    return this._queue.some(item => item.getTrack().id === trackId)
  }

  _increaseTotalSize (amount) {
    this._totalSize += amount
    this._eventEmitter.invokeAll(TOTAL_SIZE_CHANGE, this._totalSize)
  }

  containsAlbum (needleAlbum) {
    let artist = this._artists.find(
      artist => artist.id === needleAlbum.artist.id
    )
    if (!artist) {
      return false
    }
    let album = artist.albums.find(album => album.id === needleAlbum.id)
    if (!album) {
      return false
    }

    for (let needleTrack of needleAlbum.tracks) {
      if (!album.tracks.find(track => track.id === needleTrack.id)) {
        return false
      }
    }

    return true
  }

  deleteList () {
    this._artists = []
    this._queue.forEach(item => item.clearListeners())
    this._queue = []
    this._eventEmitter.invokeAll(DOWNLOAD_LIST_CHANGE, this._artists)
    this._totalSize = 0
    this._currentTrack = null
    this._state = PENDING
    this._totalLoaded = 0
  }

  async startDownload () {
    this._setState(DOWNLOADING)
    const zip = new JSZip()
    console.log('ITEMS', this._queue)

    for (let item of this._queue) {
      let track = item.getTrack()
      let album = track.album
      let artist = album.artist
      let artistFolder = zip.folder(artist.name)
      let folderName = album.title
      if (typeof album.year === 'number') {
        folderName = `${album.year} - ${album.title}`
      }
      let albumFolder = artistFolder.folder(folderName)

      this._setCurrentTrack(track)
      const buffer = await this._melHttpService.downloadTrack(track.id)
      this._setCurrentTrack(null)

      let fileName = track.title + '.mp3'
      if (typeof track.number === 'number') {
        fileName = `${track.number}`.padStart(2, '0') + ` - ${track.title}.mp3`
      }
      albumFolder.file(fileName, buffer)
    }
    this._setState(ZIPPING)
    const blob = await zip.generateAsync({ type: 'blob' })
    location.href = URL.createObjectURL(blob)
    this._setState(DONE)
  }

  async _fetchTrackSize (trackId) {
    const { size } = await this._melHttpService.getTrackDataInfo(trackId)
    return size
  }

  _setCurrentTrack (track) {
    this._currentTrack = track
    this._eventEmitter.invokeAll(CURRENT_TRACK_CHANGE, track)
  }

  getCurrentTrack () {
    return this._currentTrack
  }

  _setState (state) {
    if (state !== this._state) {
      this._state = state
      this._eventEmitter.invokeAll(STATE_CHANGE, this._state)
    }
  }

  getStatistics () {
    const tracks = []
    const artists = []
    const albums = []

    this._queue.forEach(item => {
      let track = item.getTrack()
      if (tracks.indexOf(track.id) === -1) {
        tracks.push(track.id)
      }
      if (albums.indexOf(track.album.id) === -1) {
        albums.push(track.album.id)
      }
      if (artists.indexOf(track.album.artist.id) === -1) {
        artists.push(track.album.artist.id)
      }
    })
    return {
      trackCount: tracks.length,
      artistCount: artists.length,
      albumCount: albums.length
    }
  }

  getState () {
    return this._state
  }

  getTrackSize (trackId) {
    return this._trackSizes[trackId]
  }

  getTotalSize () {
    return this._totalSize
  }

  getQueue () {
    return this._queue
  }
}

TrackDownloadService.PENDING = PENDING
TrackDownloadService.DOWNLOADING = DOWNLOADING
TrackDownloadService.ZIPPING = ZIPPING
TrackDownloadService.DONE = DONE

export default TrackDownloadService
