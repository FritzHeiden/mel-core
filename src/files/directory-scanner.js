import File from '../data/files/file'
import JobQueue from '../utils/job-qeue'

const MAX_READING_JOBS = 1

export default class DirectoryScanner {
  constructor (fileSystem, configuration) {
    this._fileSystem = fileSystem
    this._config = configuration
    this._readingQueue = new JobQueue(MAX_READING_JOBS)
    this._queueReading = this._readingQueue.queueJob.bind(this._readingQueue)
  }

  async scanDirs (callback) {
    return Promise.all(
      this._config.directories.map(directory =>
        this.scanDir(directory, callback)
      )
    )
  }

  async scanDir (directory, callback) {
    let files = []
    try {
      files = await this._queueReading(() =>
        this._fileSystem.readDir(directory)
      )
    } catch (err) {
      throw Error(`Could not read directory: ${err}`)
    }

    return Promise.all(
      files.map(async file => {
        let path = `${directory}/${file}`
        let stats = await this._queueReading(() => this._fileSystem.stats(path))
        if (stats.isDirectory) {
          return this.scanDir(path, callback)
        } else {
          let fileType = this._determineFileType(path)
          callback(new File(path, fileType, null, stats.lastModified))
        }
      })
    )
  }

  _determineFileType (path) {
    switch (
      path
        .split('.')
        .pop()
        .toLowerCase()
    ) {
      case 'mp3':
        return File.MP3
      case 'flac':
        return File.FLAC
    }
  }
}
