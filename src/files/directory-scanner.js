const File = require("../data/files/file");
const JobQueue = require("../utils/job-qeue");

const MAX_READING_JOBS = 5;

module.exports = class DirectoryScanner {
  constructor(fileSystem, configuration) {
    this._fileSystem = fileSystem;
    this._config = configuration;
    this._readingQueue = new JobQueue(MAX_READING_JOBS);
    this._queueReading = this._readingQueue.queueJob.bind(this._readingQueue);
    this._fileExtensions = this._config.extensions.map(extension =>
      this._determineFileType(extension)
    );
  }

  async scanDirs(directories, callback) {
    return Promise.all(
      directories.map(directory => this.scanDir(directory, callback))
    );
  }

  async scanDir(directory, callback) {
    const directories = [directory];
    do {
      await Promise.all(
        directories.map(directory =>
          this._queueReading(async () => {
            const fileNames = await this._fileSystem.readDir(directory);
            const filePaths = fileNames.map(
              fileName => `${directory}/${fileName}`
            );
            await Promise.all(
              filePaths.map(async filePath => {
                const stats = await this._fileSystem.stats(filePath);
                if (!stats) return;
                if (stats.isDirectory) {
                  directories.push(filePath);
                  return;
                }
                const fileType = this._determineFileType(filePath);
                if (this._fileExtensions.indexOf(fileType) === -1) return;
                callback(new File(filePath, fileType, null, stats));
              })
            );
            directories.splice(directories.indexOf(directory), 1);
          })
        )
      );
    } while (directories.length > 0);
  }

  _determineFileType(path) {
    switch (
      path
        .split(".")
        .pop()
        .toLowerCase()
    ) {
      case "mp3":
        return File.MP3;
      case "flac":
        return File.FLAC;
      default:
        return null;
    }
  }
};
