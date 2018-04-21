class ScannerConfig {
  constructor () {
    this._directories = []
    this._extensions = []
  }

  get directories () {
    return this._directories
  }

  set directories (value) {
    this._directories = value
  }

  get extensions () {
    return this._extensions
  }

  set extensions (value) {
    this._extensions = value
  }

  toDataObject () {
    return {
      directories: this._directories,
      extensions: this._extensions
    }
  }
}

class TagReaderConfig {
  constructor () {
    this._featurePatterns = []
  }

  get featurePatterns () {
    return this._featurePatterns
  }

  set featurePatterns (value) {
    this._featurePatterns = value
  }

  toDataObject () {
    return {
      feature_patterns: this._featurePatterns
    }
  }
}

export default class Configuration {
  constructor () {
    this._scanner = new ScannerConfig()
    this._tagReader = new TagReaderConfig()
  }

  get scanner () {
    return this._scanner
  }

  set scanner (value) {
    this._scanner = value
  }

  get tagReader () {
    return this._tagReader
  }

  set tagReader (value) {
    this._tagReader = value
  }

  toJsonString () {
    return JSON.stringify(
      {
        scanner: this.scanner.toDataObject(),
        tag_reader: this.tagReader.toDataObject()
      },
      null,
      '  '
    )
  }
}
