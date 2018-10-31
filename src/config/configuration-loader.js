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
  },
  web_root: '/',
  port: 3541
}

module.exports = class ConfigurationLoader {
  constructor (fileSystem) {
    this._fileSystem = fileSystem
  }

  async loadConfiguration (configPath) {
    let configJson = await this._fileSystem.readFile(configPath)
    if (configJson) {
      configJson = JSON.parse(configJson)
      return Object.assign(DEFAULT_CONFIG, configJson)
    } else {
      this.saveConfiguration(configPath, DEFAULT_CONFIG)
      return DEFAULT_CONFIG
    }
  }

  saveConfiguration (configPath, configuration) {
    return this._fileSystem.writeFile(
      configPath,
      JSON.stringify(configuration, null, 2)
    )
  }
}
