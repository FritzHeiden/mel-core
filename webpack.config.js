const path = require('path')
const fs = require('fs')

const DIST_DIR = path.join(__dirname, 'dist')
const SRC_DIR = path.join(__dirname, 'src')
const MODULES_DIR = path.join(__dirname, 'node_modules')
const MEL_WEB_DIR = fs.realpathSync(path.join(MODULES_DIR, 'mel-web/dist'))

module.exports = {
  mode: 'development',
  entry: path.join(SRC_DIR, './core.js'),
  output: {
    filename: 'mel-core.js',
    path: DIST_DIR,
    library: 'mel-core',
    libraryTarget: 'umd'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        include: MEL_WEB_DIR,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'mel-web',
          context: MEL_WEB_DIR
        }
      }
    ]
  }
}
