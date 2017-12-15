import Configuration from "./configuration";

const DEFAULT_CONFIG = {
    scanner: {
        extensions: [
            ".mp3"
        ],
        directories: []
    },
    tag_reader: {
        feature_patterns: [
            {
                pattern: "(feat. %a)",
                delimiter: ",",
                ending_delimiter: "&"
            },
            {
                pattern: "(mit %a)",
                delimiter: ","
            }
        ]
    }
};

export default class ConfigurationLoader {
    constructor(configPath, fileSystem) {
        this._fileSystem = fileSystem;
        this._configPath = this._fileSystem.APPLICATION_DIRECTORY + configPath;
    }

    loadConfiguration() {
        return new Promise((resolve, reject) => {
            this._fileSystem.stats(this._configPath).then(() => {
                    this._fileSystem.readFile(this._configPath).then(configJson => {
                        configJson = JSON.parse(configJson);
                        resolve(this._createConfig(configJson));
                    }).catch(err => console.error(err));
            }).catch(err => {
                let configuration = this._createConfig(DEFAULT_CONFIG);
                this.saveConfiguration(configuration).then(() => resolve(configuration)).catch(err => reject(err));
            });
        })
    }

    _createConfig(config) {
        let configuration = new Configuration();
        configuration.scanner.directories = config.scanner.directories;
        configuration.scanner.extensions = config.scanner.extensions;
        configuration.tagReader.featurePatterns = config.tag_reader.feature_patterns;
        return configuration;
    }

    saveConfiguration(configuration) {
        return this._fileSystem.writeFile(this._configPath, configuration.toJsonString());
    }
}