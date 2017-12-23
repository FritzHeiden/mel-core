import { limit } from 'semaphorejs'

export default class FileLoader {
  constructor (fileSystem) {
    this._fileSystem = fileSystem
    this._readFileBuffer = limit(10, (filePath) => this._fileSystem.readFileBuffer(filePath))
  }

  async loadFile (file) {
    file.buffer = await this._readFileBuffer(file.path)
    return file
  }
}
