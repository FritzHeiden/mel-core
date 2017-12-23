import WebApp from 'mel-web'
import DirectoryScanner from 'src/files/directory-scanner'
import WebServer from 'src/web/web-server'
import ConfigurationLoader from 'src/config/configuration-loader'
import FileLoader from 'src/files/file-loader'
import TagReader from 'src/media/tag-reader'
import Database from 'src/database/database'
import ApiHandler from 'src/web/api-handler'
import Track from 'src/data/track'
import NetworkAdapter from 'src/network/network-adapter'

const RELATIVE_CONFIG_PATH = '/mel.config'

export class MelCore {
  async initialize () {
    let configurationLoader = new ConfigurationLoader(RELATIVE_CONFIG_PATH,
      this._fileSystem)
    this._configuration = await configurationLoader.loadConfiguration()

    this._directoryScanner = new DirectoryScanner(this._fileSystem,
      this._configuration.scanner)
    this._tagReader = new TagReader(this._configuration.tagReader)
    this._database = new Database(this._database)
    this._fileLoader = new FileLoader(this._fileSystem)

    this._apiHandler = new ApiHandler(this._database)
    this._webServer.addRoutes(this._apiHandler.getRoutes())

    this._webApp = new WebApp()
    this._webServer.addRoutes(this._webApp.getRoutes())

    this._networkAdapter = new NetworkAdapter()

    let startWebServer = async () => {
      await this._webServer.start()
      console.log(`Mel web server start at port ${this._webServer.port}`)
    }
    await startWebServer()
  }

  async refreshFiles () {
    await (async () => {
      console.log('Refreshing files ...')
      // Scan directories
      this._directoryScanner.scanDirs(async file => {
        let persistFile = (async () => {
          if (await this._database.readFile(file.path) &&
            await this._database.isFileUpToDate(file)) {
            // If file exists in DB -> skip
            console.log(`Skipping existing file ${file.path} ...`)
            return null
          }

          // Load the file
          file = await this._fileLoader.loadFile(file)

          // If file does not exist in DB read its ID3 tags
          file.track = await this._tagReader.readTags(file)

          // Persist file in DB
          await this._database.persistFile(file)
          console.log(`Added new file ${file.path}`)

          return file
        })()

        let persistTrack = async (track) => {
          if (!(await this._database.persistTrack(track))) {
            // If track exists in DB -> skip
            // console.log(`Skipping existing track ${track.toString()}`)
          } else {
            console.log(`Added new track ${track.toString()}`)
          }
        }

        let persistAlbum = async (album) => {
          if (!(await this._database.persistAlbum(album))) {
            // If album exists in DB -> skip
            // console.log(`Skipping existing album ${album.toString()}`)
            return
          }
          console.log(`Added new album ${album.toString()}`)
        }

        let persistArtist = async (artist) => {
          if (await this._database.persistArtist(artist)) {
            console.log(`Added new artist ${artist.toString()}`)
          } else {
            // console.log(`Skipping artist ${artist.toString()}`)
          }
        }

        let persistMetaData = async () => {
          try {
            let file = await persistFile
            if (file) {
              persistTrack(file.track)
              persistAlbum(file.track.album)
              persistArtist(file.track.album.artist)
              file.track.artists.forEach(artist => persistArtist(artist))
            }
          } catch (e) {
            console.error(e)
          }
        }

        await persistMetaData()
      })
    })()
  }

  set fileSystem (fileSystem) {
    this._fileSystem = fileSystem
  }

  set webServer (webServer) {
    this._webServer = new WebServer(webServer)
  }

  set database (database) {
    this._database = database
  }
}

export { Track }
