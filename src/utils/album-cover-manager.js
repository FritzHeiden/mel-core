const RELATIVE_ALBUM_COVERS_PATH = '/data/covers'

export default class AlbumCoverManager {
  constructor (fileSystem) {
    this._fileSystem = fileSystem
    this._albumCoversPath =
      fileSystem.APPLICATION_DIRECTORY + RELATIVE_ALBUM_COVERS_PATH
  }

  async saveAlbumCover (album) {
    if (!album || !album.getAlbumCover() || !album.getAlbumCover().data) {
      return
    }

    if (!(await this._fileSystem.stats(this._albumCoversPath))) {
      this._fileSystem.makeDirectory(this._albumCoversPath)
    }

    const { data, mime } = album.getAlbumCover()
    let extension = ''

    switch (mime) {
      case 'image/png':
        extension = '.png'
        break

      default:
      case 'image/jpeg':
      case 'image/jpg':
        extension = '.jpg'
    }

    const filePath = this._albumCoversPath + '/' + album.id + extension

    if (await this._fileSystem.stats(filePath)) {
      return
    }

    return this._fileSystem.writeBinaryFile(filePath, data)
  }
}
