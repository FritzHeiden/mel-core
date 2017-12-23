var path = require('path')

var DIST_DIR = path.join(__dirname, 'dist')
var CLIENT_DIR = path.join(__dirname, 'src')

module.exports = {
  context: CLIENT_DIR,
  entry: {
    path: path.join(CLIENT_DIR, './core.js')
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$|\.jsx$/,
        use: [{loader: 'source-map-loader'}],
        enforce: 'pre'
      }
    ]
  },
  output: {
    filename: './mel-core.js',
    path: DIST_DIR,
    library: 'MelCore',
    libraryTarget: 'umd'
  }
  // plugins: [
  //     new webpack.DefinePlugin({
  //         'process.env.NODE_ENV': JSON.stringify('development')
  //     })
  // ]
}
