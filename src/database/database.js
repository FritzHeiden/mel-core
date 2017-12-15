import Serializer from "./serializer";
import Deserializer from "./deserializer";

const PERSIST_TRACK = 0;

export default class Database {
    constructor(database) {
        this._db = database;
        this._db.initialize().then(() => console.log("Database loaded.")).catch(console.error);
        this._serializer = new Serializer();
        this._deserializer = new Deserializer();
        this._jobs = [];
        this._isRunning = false;
    }

    persistTrack(track) {
        return new Promise((resolve, reject) => {
            this._jobs.unshift({type: PERSIST_TRACK, object: track, resolve, reject});
            this._doNextJob();
        });
    }

    _doNextJob() {
        setTimeout(() => {
            if (this._isRunning || this._jobs.length === 0) {
                return;
            }

            this._isRunning = true;
            let job = this._jobs.pop();
            let resolve = object => {
                this._isRunning = false;
                this._doNextJob();
                job.resolve(object);
            };

            let reject = error => {
                this._isRunning = false;
                this._doNextJob();
                job.reject(error);
            };
            switch (job.type) {
                case PERSIST_TRACK:
                    this._persistTrack(job.object).then(resolve).catch(reject);
                    break;
            }
        }, 1);
    }

    _persistTrack(track) {
        return new Promise((resolve, reject) => {
            this._db.readFile(track.file.path)
                .then(file => {
                    if (!file) {
                        console.log("File inserted!");
                        let fileJson = this._serializer.serializeFile(track.file);
                        return this._db.insertFile(fileJson);
                    } else {
                        file = this._deserializer.deserializeFile(file);
                        if (JSON.stringify(file.lastModified) !== JSON.stringify(track.file.lastModified)) {
                            console.log("File updated!");
                            let fileJson = this._serializer.serializeFile(track.file);
                            return this._db.updateFile(fileJson);
                        } else {
                            return Promise.reject("File not changed!");
                        }
                    }
                })
                .then(file => {
                    return this._db.readTrack(track.id);
                })
                .then(track => {
                    if (!track) {
                        let trackJson = this._serializer.serializeTrack(track);
                        this._db.insertTrack(trackJson);
                    }
                    return Promise.all(track.artists.map(artist => this._db.readArtist(artist.id)))
                })
                .then(artists => {
                    return Promise.all(artists
                        .filter(artist => artist !== null)
                        .map(artist => this._db.insertArtist(this._serializer.serializeArtist(artist))));
                })
                .then(insertedArtists => {
                    return this._db.readAlbum(track.album.id);
                })
                .then(album => {
                    if (!album) {
                        let albumJson = this._serializer.serializeAlbum(album);
                        return this._db.insertAlbum(albumJson);
                    }
                    return Promise.resolve();
                })
                .then(insertedAlbum => {

                })
                .catch(console.error);
            resolve();
        });
    }

    persistArtist(artist) {
        return new Promise((resolve, reject) => {
            let artists = this._db.artists;
            artists.readArtist(artist.id)
                .then(exists => {
                    let artistJson = this._serializer.serializeArtist(artist);
                    if (!exists) {
                        return artists.insertArtist(artistJson);
                    } else {
                        return artists.updateArtist(artistJson);
                    }
                })
                .then(resolve).catch(reject);
        });
    }
}