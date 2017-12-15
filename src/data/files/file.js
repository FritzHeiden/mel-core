const MP3 = 1, FLAC = 2;

export default class File {
    constructor(path, type, buffer = null, lastModified = 0, trackId) {
        this._path = path;
        this._type = type;
        this._buffer = buffer;
        this._lastModified = lastModified;
        this._trackId = trackId;
    }

    get path() {
        return this._path;
    }

    set path(value) {
        this._path = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get buffer() {
        return this._buffer;
    }

    set buffer(value) {
        this._buffer = value;
    }

    get lastModified() {
        return this._lastModified;
    }

    set lastModified(value) {
        this._lastModified = value;
    }

    get trackId() {
        return this._trackId;
    }

    set trackId(value) {
        this._trackId = value;
    }

    static get MP3() {
        return MP3;
    }

    static get FLAC() {
        return FLAC;
    }
}