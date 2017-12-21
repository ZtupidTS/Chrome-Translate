const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  output: {
    path: __dirname + '/extension',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            css: ExtractTextPlugin.extract(['css-loader?url=false']),
            scss: ExtractTextPlugin.extract(['css-loader?url=false', 'sass-loader'])
          }
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?url=false')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader?url=false', 'sass-loader'])
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};