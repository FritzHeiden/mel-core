const AlbumCover = require('../data/album-cover')

const RELATIVE_ALBUM_COVERS_PATH = '/data/covers'

module.exports = class AlbumCoverManager {
  constructor (fileSystem) {
    this._fileSystem = fileSystem
    this._albumCoversPath =
      fileSystem.APPLICATION_DIRECTORY + RELATIVE_ALBUM_COVERS_PATH
    this._albumCovers = {}
  }

  async initialize () {
    if (!await this._fileSystem.stats(this._albumCoversPath)) {
      await this._fileSystem.makeDirectory(this._albumCoversPath)
    }
    await this.loadAlbumCovers()
  }

  async saveAlbumCover (album) {
    if (
      !album ||
      !album.getAlbumCover ||
      !album.getAlbumCover() ||
      !album.getAlbumCover().data
    ) {
      return
    }

    const { data, mime } = album.getAlbumCover()
    const extension = this._mimeToExtension(mime)

    const filePath = this._albumCoversPath + '/' + album.id + extension

    if (await this._fileSystem.stats(filePath)) {
      return
    }

    this._albumCovers[album.id] = extension

    return this._fileSystem.writeBinaryFile(filePath, data)
  }

  async loadAlbumCovers () {
    const files = await this._fileSystem.readDir(this._albumCoversPath)
    files.forEach(file => {
      const { 0: albumId, 1: extension } = file.split('.')
      this._albumCovers[albumId] = '.' + extension
    })
  }

  async loadAlbumCover (albumId) {
    const extension = this._albumCovers[albumId]
    if (!extension) {
      throw new Error(`Could not find ${albumId} in album cover index!`)
    }
    const filePath = `${this._albumCoversPath}/${albumId}${extension}`
    const buffer = await this._fileSystem.readFileBuffer(filePath)
    const mime = this._extensionToMime(extension)
    return new AlbumCover(buffer, mime, albumId)
  }

  _mimeToExtension (mime) {
    switch (mime) {
      case 'image/png':
        return '.png'

      case 'image/jpeg':
      case 'image/jpg':
        return '.jpg'

      default:
        console.warn('Unknown album cover mime type ' + mime)
        return '.jpg'
    }
  }

  _extensionToMime (extension) {
    switch (extension) {
      case '.jpg':
      case '.jpeg':
        return 'image/jpg'
      case '.png':
        return 'image/png'
      default:
        console.warn('Unknown album cover extension ' + extension)
    }
  }
}
