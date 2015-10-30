webpack = require 'webpack'

# Config
module.exports =
  entry: './src/main'
  output:
    path: './dist'
    filename: 'main.js'
  module:
    loaders: [
      test: /\.coffee$/, loader: 'coffee'
    ,
      test: /\.css$/, loader: 'style!css'
    ,
      test: /\.scss$/, loader: "style!css!sass"
    ,
      test: /\.jade$/, loader: 'jade'
    ,
      test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=assets/fonts/[name].[ext]'
    ,
      test: /\.json$/, loader: 'html?name=assets/data/[name].[ext]'
    ]
  resolve:
    modulesDirectories: ['src', 'node_modules']
    extensions: ['', '.coffee', '.js']
  node:
    fs: 'empty'
