const DirectoryScanner = require("./files/directory-scanner");
const WebServer = require("./network/http/web-server");
const ConfigurationLoader = require("./config/configuration-loader");
const TagReader = require("./media/tag-reader");
const Database = require("./database/database");
const ApiHandler = require("./network/http/api-handler");
const File = require("./data/files/file");
const Track = require("./data/track");
const Album = require("./data/album");
const Artist = require("./data/artist");
const MelServerSocket = require("./network/web-socket/mel-server-socket");
const MelClientSocket = require("./network/web-socket/mel-client-socket");
const MelHttpService = require("./network/http/mel-http-service");
const WebSocket = require("./network/web-socket/web-socket");
const FileSystem = require("./files/file-system");
const JobQueue = require("./utils/job-qeue");
const Response = require("./network/http/response");
const Request = require("./network/http/request");
const AlbumCoverManager = require("./utils/album-cover-manager");
const TrackDownloadService = require("./services/track-download-service");
const StringFormatter = require("./utils/string-formatter");

class MelCore {
  async initialize({ configPath, melWebPath }) {
    // Load Configuration
    try {
      let configurationLoader = new ConfigurationLoader(this._fileSystem);
      this._configuration = await configurationLoader.loadConfiguration(
        configPath
      );
    } catch (err) {
      console.error("Could not load database: " + err);
    }

    // Directory Scanner
    try {
      this._directoryScanner = new DirectoryScanner(
        this._fileSystem,
        this._configuration.scanner
      );
    } catch (err) {
      console.error("Could not initialize directory scanner: " + err);
    }
    this._tagReader = new TagReader(
      this._configuration.tag_reader,
      this._fileSystem
    );

    // Album Cover Manager
    this._albumCoverManager = new AlbumCoverManager(this._fileSystem);
    await this._albumCoverManager.initialize();

    // Database
    try {
      await this._database.initialize();
    } catch (err) {
      console.error("Could not initialize database: " + err);
    }

    // API Handler
    try {
      this._apiHandler = new ApiHandler(
        this._database,
        this._fileSystem,
        this._albumCoverManager,
        { webRoot: this._configuration.web_root }
      );
    } catch (err) {
      console.error("Could not initialize api handler: " + err);
    }

    // Web Server
    this._webServer.addRoutes(this._apiHandler.getRoutes());
    this._webServer.addStaticDirectory(melWebPath);
    this._webServer.setWebRoot(this._configuration.web_root);
    this._webServer.apply();
    this._webServer.setPort(this._configuration.port);

    // Network Adapter
    try {
      let identity = this._database.identity;
      this._melServerSocket = new MelServerSocket(
        this._webSocket,
        identity,
        this._database,
        { webRoot: this._configuration.web_root }
      );
      this._melServerSocket.initialize();
    } catch (err) {
      console.error("Could not initialize network adapter: " + err);
    }

    await this._webServer.start();
  }

  async refreshFiles() {
    console.log("Refreshing files ...");
    let refreshQuery = new JobQueue(5);
    // Scan directories
    await this._directoryScanner.scanDirs(newFile => {
      return refreshQuery.queueJob(async () => {
        try {
          let file = await this._database.readFile(newFile.getPath());
          if (
            file &&
            newFile.getStats().lastModified <= file.getStats().lastModified
          ) {
            // If file exists in DB -> skip
            console.log(`Skipping existing file ${file.getPath()} ...`);
            return null;
          }

          // newFile.setBuffer(
          //   await this._fileSystem.readFileBuffer(newFile.getPath())
          // )
          // If file does not exist in DB read its ID3 tags
          // console.log("READING TAGS FOR FILE", newFile);
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
          this._database.persistFile(newFile);
          console.log(`Added new file ${newFile.getPath()}`);

          this._database.persistTrack(newFile.getTrack());
          this._database.persistAlbum(newFile.getTrack().getAlbum());
          this._database.persistArtist(
            newFile
              .getTrack()
              .getAlbum()
              .getArtist()
          );

          for (let artist of newFile.getTrack().getArtists()) {
            this._database.persistArtist(artist);
          }
        } catch (err) {
          console.error(new Error(`Could not handle file:\n${err.stack}`));
        }
      });
    });
    console.log("Files refreshed.");
  }

  set fileSystem(fileSystem) {
    if (!(fileSystem instanceof FileSystem)) {
      throw new Error("File system must be of class FileSystem.");
    }
    this._fileSystem = fileSystem;
  }

  set webServer(webServer) {
    if (!(webServer instanceof WebServer)) {
      throw new Error("Web server must be of class WebServer.");
    }
    this._webServer = webServer;
  }

  get webServer() {
    return this._webServer;
  }

  set database(database) {
    if (!(database instanceof Database)) {
      throw new Error("Database must be of class Database.");
    }
    this._database = database;
  }

  set webSocket(socket) {
    this._webSocket = socket;
  }
}

module.exports = {
  Artist,
  Album,
  Track,
  File,
  WebSocket,
  MelClientSocket,
  MelHttpService,
  FileSystem,
  WebServer,
  Database,
  MelCore,
  Response,
  Request,
  TrackDownloadService,
  StringFormatter
};
