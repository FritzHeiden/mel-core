import Configuration from './configuration'

const DEFAULT_CONFIG = {
  scanner: {
    extensions: [
      '.mp3'
    ],
    directories: []
  },
  tag_reader: {
    feature_patterns: [
      {
        pattern: '(feat. %a)',
        delimiter: ',',
        ending_delimiter: '&'
      },
      {
        pattern: '(mit %a)',
        delimiter: ','
      }
    ]
  }
}

export default class ConfigurationLoader {
  constructor (configPath, fileSystem) {
    this._fileSystem = fileSystem
    this._configPath = this._fileSystem.APPLICATION_DIRECTORY + configPath
  }

  _createConfig (config) {
    let configuration = new Configuration()
    configuration.scanner.directories = config.scanner.directories
    configuration.scanner.extensions = config.scanner.extensions
    configuration.tagReader.featurePatterns = config.tag_reader.feature_patterns
    return configuration
  }

  async loadConfiguration () {
    if (await this._fileSystem.stats(this._configPath)) {
      let configJson = await this._fileSystem.readFile(this._configPath)
      configJson = JSON.parse(configJson)
      return this._createConfig(configJson)
    } else {
      let configuration = this._createConfig(DEFAULT_CONFIG)
      if (await this.saveConfiguration(configuration)) {
        return configuration
      }
    }
  }

  saveConfiguration (configuration) {
    return this._fileSystem.writeFile(this._configPath,
      configuration.toJsonString())
  }
}