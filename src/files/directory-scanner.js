import File from '../data/files/file'
import { limit } from 'semaphorejs'

export default class DirectoryScanner {
  constructor (fileSystem, configuration) {
    this._fileSystem = fileSystem
    this._config = configuration
    this._readDir = limit(1, (dirPath) => this._fileSystem.readDir(dirPath))
    this._stats = limit(1, (path) => this._fileSystem.stats(path))
  }

  async scanDirs (callback) {
    this._config.directories.forEach(
      directory => this.scanDir(directory, callback))
  }

  async scanDir (directory, callback) {
    let files = await this._readDir(directory)

    return Promise.all(files.map(async file => {
      let path = `${directory}/${file}`
      let stats = await this._stats(path)
      if (stats.isDirectory) {
        this.scanDir(path, callback)
      } else {
        let fileType = this._determineFileType(path)
        callback(new File(path, fileType, null, stats.lastModified))
      }
    }))
  }

  _determineFileType (path) {
    switch (path.split('.').pop().toLowerCase()) {
      case 'mp3':
        return File.MP3
      case 'flac':
        return File.FLAC
    }
  }
}