var webpack = require('webpack')
var path = require('path')

module.exports = {
  mode: 'production',
  entry: [
    'babel-polyfill',
    __dirname + '/src/index.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader?' + JSON.stringify({
          cacheDirectory: true,
          presets: ['es2015', 'react']
        })],
        exclude: /node_modules/
      }
    ]
  }
  // resolve: {
  //     root: path.resolve('./src')
  // }
}
