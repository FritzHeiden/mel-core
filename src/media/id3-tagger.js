const JsMediaTags = require("../../lib/jsmediatags");

const File = require("../data/files/file");
// const ArrayBufferFileReader = require('./array-buffer-file-reader')
const FileReader = require("./file-reader");

module.exports = class Id3Tagger {
  constructor(fileSystem) {
    // JsMediaTags.Config.addFileReader(ArrayBufferFileReader)
    FileReader.fileSystem = fileSystem;
    JsMediaTags.Config.addFileReader(FileReader);
  }

  async readTags(file) {
    if (!(file instanceof File)) {
      throw new Error("First parameter must be of type File!");
    }

    return new Promise((resolve, reject) => {
      JsMediaTags.read(file, {
        onSuccess: ({ tags }) => {
          let trackTitle = null;
          if (tags.TIT2) trackTitle = tags.TIT2.data;
          let artistName = null;
          if (tags.TPE1) artistName = tags.TPE1.data;
          let albumArtistName = null;
          if (tags.TPE2) albumArtistName = tags.TPE2.data;
          let year = null;
          if (tags.TDAT) year = tags.TDAT.data;
          if (!year && tags.TYER) year = tags.TYER.data;
          if (!year && tags.TDRC) year = tags.TDRC.data;
          let trackNumber = null;
          if (tags.TRCK) trackNumber = tags.TRCK.data;
          let discNumber = null;
          if (tags.TPOS) discNumber = tags.TPOS.data;
          let albumTitle = null;
          if (tags.TALB) albumTitle = tags.TALB.data;
          let albumCover = null;
          if (tags.APIC) albumCover = tags.APIC.data;

          resolve({
            trackTitle,
            artistName,
            albumArtistName,
            albumTitle,
            year,
            trackNumber,
            discNumber,
            albumCover
          });
        },
        onError: error => {
          console.log(error);
        }
      });
    });

    // const tags = ID3Parser.parse(new Uint8Array(file.getBuffer()))

    // let dataView = new DataView(file.getBuffer())
    // return this._readID3v2(dataView)
  }
};
