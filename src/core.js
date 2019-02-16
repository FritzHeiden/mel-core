const DirectoryScanner = require("./files/directory-scanner");
const WebServer = require("./network/http/web-server");
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
const MediaScraper = require("./media/media-scraper");

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

    // Media Scraper
    this._mediaScraper = new MediaScraper({
      directoryScanner: this._directoryScanner,
      database: this._database,
      tagReader: this._tagReader,
      albumCoverManager: this._albumCoverManager
    });

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
    return Promise.all(
      this._configuration.scanner.directories.map(directory =>
        this._mediaScraper.scrapeMusic(directory)
      )
    );
  }

  setFileSystem(fileSystem) {
    if (!(fileSystem instanceof FileSystem)) {
      throw new Error("File system must be of class FileSystem.");
    }
    this._fileSystem = fileSystem;
  }

  setWebServer(webServer) {
    if (!(webServer instanceof WebServer)) {
      throw new Error("Web server must be of class WebServer.");
    }
    this._webServer = webServer;
  }

  getWebServer() {
    return this._webServer;
  }

  setDatabase(database) {
    if (!(database instanceof Database)) {
      throw new Error("Database must be of class Database.");
    }
    this._database = database;
  }

  setWebSocket(socket) {
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
