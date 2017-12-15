import File from "../data/files/file";

export default class DirectoryScanner {

    constructor(fileSystem, configuration) {
        this._fileSystem = fileSystem;
        this._jobs = [];
        this._isScanning = false;
        this._config = configuration;
    }

    scanDirs(resolve, reject) {
        this._config.directories.forEach(directory => this.scanDir(directory, resolve, reject));
    }

    scanDir(directory, resolve, reject) {
        setTimeout(() => {
            this._fileSystem.readDir(directory)
                .then(files => files.forEach(file => this._queueFile(directory + "/" + file, resolve, reject)))
                .catch(err => reject(err));
        }, 0);
    }

    _queueFile(absolutePath, resolve, reject) {
        this._jobs.unshift({absolutePath, resolve, reject});
        this._evaluateNextFile();
    }

    _evaluateNextFile() {
        setTimeout(() => {
            if (this._isScanning || this._jobs.length === 0) {
                return;
            }

            this._isScanning = true;
            let job = this._jobs.pop();
            this._fileSystem.stats(job.absolutePath).then(stats => {
                if (stats.isDirectory) {
                    this.scanDir(job.absolutePath, job.resolve, job.reject);
                    this._isScanning = false;
                    this._evaluateNextFile();
                } else {
                    let fileType = this._determineFileType(job.absolutePath);
                    this._isScanning = false;
                    this._evaluateNextFile();
                    job.resolve(new File(job.absolutePath, fileType, null, stats.lastModified));
                }
            }).catch(err => {
                this._isScanning = false;
                this._evaluateNextFile();
                job.reject(err);
            });
        }, 1);
    }

    _determineFileType(path) {
        switch (path.split(".").pop().toLowerCase()) {
            case "mp3":
                return File.MP3;
            case "flac":
                return File.FLAC;
        }
    }
};