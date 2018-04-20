import DirectoryScanner from './files/directory-scanner'
import WebServer from './network/http/web-server'
import ConfigurationLoader from './config/configuration-loader'
import TagReader from './media/tag-reader'
import Database from './database/database'
import ApiHandler from './network/http/api-handler'
import File from './data/files/file'
import Track from './data/track'
import Album from './data/album'
import Artist from './data/artist'
import MelServerSocket from './network/web-socket/mel-server-socket'
import MelClientSocket from './network/web-socket/mel-client-socket'
import WebSocket from './network/web-socket/web-socket'
import FileSystem from './files/file-system'
import JobQueue from './utils/job-qeue'
import Response from './network/http/response'
import Request from './network/http/request'

// Dependency for web app
require.context('mel-web/dist', true, /.+/)

const RELATIVE_CONFIG_PATH = '/config.json'

class MelCore {
  async initialize () {
    // Load Configuration
    try {
      let configurationLoader = new ConfigurationLoader(
        RELATIVE_CONFIG_PATH,
        this._fileSystem
      )
      this._configuration = await configurationLoader.loadConfiguration()
    } catch (err) {
      console.error('Could not load database: ' + err)
    }

    // Directory Scanner
    try {
      this._directoryScanner = new DirectoryScanner(
        this._fileSystem,
        this._configuration.scanner
      )
    } catch (err) {
      console.error('Could not initialize directory scanner: ' + err)
    }
    this._tagReader = new TagReader(this._configuration.tagReader)

    // Database
    try {
      await this._database.initialize()
    } catch (err) {
      console.error('Could not initialize database: ' + err)
    }

    // API Handler
    try {
      this._apiHandler = new ApiHandler(this._database, this._fileSystem)
      this._webServer.addRoutes(this._apiHandler.getRoutes())
    } catch (err) {
      console.error('Could not initialize api handler: ' + err)
    }

    // Web App
    this._webServer.addStaticDirectory(
      this._fileSystem.APPLICATION_DIRECTORY + '/mel-web/'
    )

    // Network Adapter
    try {
      let identity = this._database.identity
      this._melServerSocket = new MelServerSocket(
        this._webSocket,
        identity,
        this._database
      )
      this._melServerSocket.initialize()
    } catch (err) {
      console.error('Could not initialize network adapter: ' + err)
    }

    await this._webServer.start()
  }

  async refreshFiles () {
    console.log('Refreshing files ...')
    let refreshQuery = new JobQueue(5)
    // Scan directories
    await this._directoryScanner.scanDirs(newFile =>
      refreshQuery.queueJob(async () => {
        try {
          let file = await this._database.readFile(newFile.path)
          if (file && newFile.lastModified <= file.lastModified) {
            // If file exists in DB -> skip
            console.log(`Skipping existing file ${file.path} ...`)
            return null
          }

          newFile.buffer = await this._fileSystem.readFileBuffer(newFile.path)

          // If file does not exist in DB read its ID3 tags
          newFile.track = await this._tagReader.readTags(newFile)

          newFile.deleteBuffer()
          // Persist file in DB
          await this._database.persistFile(newFile)
          console.log(`Added new file ${newFile.path}`)

          await this._database.persistTrack(newFile.track)
          await this._database.persistAlbum(newFile.track.album)
          await this._database.persistArtist(newFile.track.album.artist)

          for (let artist of newFile.track.artists) {
            await this._database.persistArtist(artist)
          }
        } catch (err) {
          console.error(new Error(`Could not handle file:\n${err.stack}`))
        }
      })
    )
    console.log('Files refreshed.')
  }

  set fileSystem (fileSystem) {
    if (!(fileSystem instanceof FileSystem)) {
      throw new Error('File system must be of class FileSystem.')
    }
    this._fileSystem = fileSystem
  }

  set webServer (webServer) {
    if (!(webServer instanceof WebServer)) {
      throw new Error('Web server must be of class WebServer.')
    }
    this._webServer = webServer
  }

  get webServer () {
    return this._webServer
  }

  set database (database) {
    if (!(database instanceof Database)) {
      throw new Error('Database must be of class Database.')
    }
    this._database = database
  }

  set webSocket (socket) {
    this._webSocket = socket
  }
}

export {
  Artist,
  Album,
  Track,
  File,
  WebSocket,
  MelClientSocket,
  FileSystem,
  WebServer,
  Database,
  MelCore,
  Response,
  Request
}
