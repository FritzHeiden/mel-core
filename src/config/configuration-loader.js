import Configuration from './configuration'

const DEFAULT_CONFIG = {
  scanner: {
    extensions: ['.mp3'],
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
  constructor (fileSystem) {
    this._fileSystem = fileSystem
  }

  _createConfig (config) {
    let configuration = new Configuration()
    configuration.scanner.directories = config.scanner.directories
    configuration.scanner.extensions = config.scanner.extensions
    configuration.tagReader.featurePatterns = config.tag_reader.feature_patterns
    return configuration
  }

  async loadConfiguration () {
    let configJson = await this._fileSystem.readFile(this._configPath)
    if (configJson) {
      configJson = JSON.parse(configJson)
      return this._createConfig(configJson)
    } else {
      let configuration = this._createConfig(DEFAULT_CONFIG)
      this.saveConfiguration(configuration)
      return configuration
    }
  }

  saveConfiguration (configuration) {
    return this._fileSystem.writeFile(
      this._configPath,
      configuration.toJsonString()
    )
  }

  setConfigPath (configPath) {
    this._configPath = configPath
    return this
  }

  getConfigPath () {
    return this._configPath
  }
}
