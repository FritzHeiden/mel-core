export default class FileLoader {
    constructor(fileSystem) {
        this._jobs = [];
        this._isLoading = false;
        this._fileSystem = fileSystem;
    }

    loadFile(file) {
        return new Promise((resolve, reject) => {
            this._jobs.unshift({file, resolve, reject});
            this._loadNextFile();
        });
    }

    _loadNextFile() {
        setTimeout(() => {
            if (this._isLoading || this._jobs.length === 0) {
                return;
            }

            this._isLoading = true;
            let job = this._jobs.pop();
            this._fileSystem.readFileBuffer(job.file.path)
                .then(buffer => {
                    job.file.buffer = buffer;
                    job.resolve(job.file);
                    this._isLoading = false;
                    this._loadNextFile();
                })
                .catch(err => {
                    job.reject(err);
                    this._isLoading = false;
                    this._loadNextFile();
                });
        }, 1);
    }
}