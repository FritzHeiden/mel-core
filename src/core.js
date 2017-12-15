import WebApp from "mel-web";
import DirectoryScanner from "./files/directory-scanner";
import WebServer from "./web/web-server";
import ConfigurationLoader from "./config/configuration-loader";
import FileLoader from "./files/file-loader";
import TagReader from "./media/tag-reader";
import Database from "./database/database";

const RELATIVE_CONFIG_PATH = "/mel.config";

export default class MelCore {
    constructor() {
        if (!String.prototype.format) {
            String.prototype.format = function () {
                var args = arguments;
                return this.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] !== 'undefined'
                        ? args[number]
                        : match;
                });
            };
        }
    }

    initialize() {
        return new Promise((resolve, reject) => {
            let initJobs = [];

            let configurationLoader = new ConfigurationLoader(RELATIVE_CONFIG_PATH, this._fileSystem);
            let loadConfiguration = configurationLoader.loadConfiguration();
            loadConfiguration.then(configuration => {
                this._configuration = configuration;
                this._directoryScanner = new DirectoryScanner(this._fileSystem, this._configuration.scanner);
                this._tagReader = new TagReader(this._configuration.tagReader);
                this._database = new Database(this._database);
            });
            loadConfiguration.catch(err => console.error(err));
            initJobs.push(loadConfiguration);


            this._webApp = new WebApp();
            this._webServer.addRoutes(this._webApp.getRoutes());
            let startWebServer = this._webServer.start();
            startWebServer.then(() => console.log("Mel web server start at port " + this._webServer.port));
            startWebServer.catch(console.error);
            initJobs.push(startWebServer);

            this._fileLoader = new FileLoader(this._fileSystem);

            Promise.all(initJobs).then(() => resolve()).catch(console.error);
        });
    }

    refreshFiles() {
        return new Promise((resolve, reject) => {
            console.log("Refreshing files ...");
            this._directoryScanner.scanDirs(file => {
                this._fileLoader.loadFile(file)
                    .then(file => this._tagReader.readTags(file))
                    .then(track => this._database.persistTrack(track))
                    // .then(() => console.log("Track persisted."))
                    .catch(console.error)
            }, console.error);
        });
    }

    set fileSystem(fileSystem) {
        this._fileSystem = fileSystem;
    }

    set webServer(webServer) {
        this._webServer = new WebServer(webServer);
    }

    set database(database) {
        this._database = database;
    }
}