module.exports = class FileSystem {
  get APPLICATION_DIRECTORY () {
    throw new Error('FileSystem.APPLICATION_DIRECTORY() not implemented!')
  }

  async stats (filePath) {
    throw new Error('FileSystem.stats(filePath) not implemented!')
  }

  async readFile (filePath) {
    throw new Error('FileSystem.readFile(filePath) not implemented!')
  }

  async writeFile (filePath, data) {
    throw new Error('FileSystem.writeFile(filePath, data) not implemented!')
  }

  async writeBinaryFile (filePath, data) {
    throw new Error(
      'FileSystem.writeBinaryFile(filePath, data) not impemented!'
    )
  }

  async readDir (directoryPath) {
    throw new Error('FileSystem.readDir(directoryPath) not implemented!')
  }

  async readFileBuffer (filePath) {
    throw new Error('FileSystem.readFileBuffer(filePath) not implemented!')
  }

  async makeDirectory (directoryPath) {
    throw new Error('FileSystem.makeDirectory(directoryPath) not implemented!')
  }
}
