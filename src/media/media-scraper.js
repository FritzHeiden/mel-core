const JobQueue = require("../utils/job-qeue");
const Constants = require("../constants");

const MAX_SCRAPING = 5;
const { MEDIA_SCRAPER_PRIORITY } = Constants.database;

class MediaScraper {
  constructor({ directoryScanner, database, tagReader, albumCoverManager }) {
    this._directoryScanner = directoryScanner;
    this._database = database;
    this._tagReader = tagReader;
    this._albumCoverManager = albumCoverManager;
    this._scrapingQuery = new JobQueue(MAX_SCRAPING);
  }

  async scrapeMusic(directory) {
    const fileJobs = [];
    await this._directoryScanner.scanDir(directory, newFile => {
      fileJobs.push(
        this._scrapingQuery.queueJob(async () => {
          try {
            const file = await this._database.readFile(
              newFile.getPath(),
              MEDIA_SCRAPER_PRIORITY
            );
            if (
              file &&
              newFile.getStats().lastModified <= file.getStats().lastModified
            ) {
              // If file exists in DB -> skip
              console.log(`Skipping existing file ${file.getPath()} ...`);
              return null;
            }
            // If file does not exist in DB read its ID3 tags
            const track = await this._tagReader.readTags(newFile);
            newFile.setTrack(track);

            await this._albumCoverManager.saveAlbumCover(
              newFile.getTrack().getAlbum()
            );
            newFile
              .getTrack()
              .getAlbum()
              .deleteAlbumCoverBuffer();

            newFile.deleteBuffer();
            // Persist file in DB
            console.log(`Added new file ${newFile.getPath()}`);
            const databaseJobs = [];
            databaseJobs.push(
              this._database.createFile(newFile, MEDIA_SCRAPER_PRIORITY)
            );

            databaseJobs.push(
              this._database.complementTrack(track, MEDIA_SCRAPER_PRIORITY)
            );

            const album = track.getAlbum();
            databaseJobs.push(
              this._database.complementAlbum(album, MEDIA_SCRAPER_PRIORITY)
            );

            const artist = album.getArtist();
            databaseJobs.push(
              this._database.complementArtist(artist, MEDIA_SCRAPER_PRIORITY)
            );

            for (let artist of track.getArtists()) {
              databaseJobs.push(
                this._database.complementArtist(artist, MEDIA_SCRAPER_PRIORITY)
              );
            }

            await Promise.all(databaseJobs);
          } catch (err) {
            console.error(new Error(`Could not handle file:\n${err.stack}`));
          }
        })
      );
    });
    await Promise.all(fileJobs);
  }
}

module.exports = MediaScraper;
