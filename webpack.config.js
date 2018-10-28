const path = require('path')

const DIST_DIR = path.join(__dirname, 'dist')
const SRC_DIR = path.join(__dirname, 'src')

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
      }
    ]
  }
}
