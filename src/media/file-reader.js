const MediaFileReader = require("../../lib/MediaFileReader");

const File = require("../data/files/file");

class FileReader extends MediaFileReader {
  constructor(file, fileSystem) {
    super();
    this._file = file;
    this._fileSystem = FileReader.fileSystem;
    this._data = [];
  }

  init(callbacks) {
    callbacks.onSuccess();
  }

  getSize() {
    return this._file.getStats().size;
  }

  loadRange(range, callbacks) {
    // callbacks.onSuccess()
    // console.log("loadRange NOT IMPLEMENTED!", range);
    // console.log("LOAD RANGE", range);
    (async () => {
      try {
        range = { start: range[0], end: range[1] };
        const data = this._data.find(
          ({ range: loadedRange }) =>
            loadedRange.start <= range.start && loadedRange.end >= range.end
        );
        if (data) {
          callbacks.onSuccess();
          return;
        }
        const filePath = this._file.getPath();
        const dataView = await this._fileSystem.read(filePath, range);
        this._data.push({ range, dataView });
        // console.log(this._data);
        callbacks.onSuccess();
      } catch (e) {
        console.error(e);
        callbacks.onError();
      }
    })();
  }

  getBytesLoaded(param) {
    console.log("getBytesLoaded NOT IMPLEMENTED!");
  }

  getByteAt(offset) {
    // console.log("get byte at", offset);
    const data = this._data.find(
      ({ range }) => range.start <= offset && range.end >= offset
    );
    if (!data) {
      throw Error(`Offset ${offset} hasn't been loaded yet.`);
    }
    const dataView = data.dataView;
    return dataView.getUint8(offset);
  }
}

FileReader.canReadFile = function(file) {
  return file instanceof File;
};

module.exports = FileReader;
