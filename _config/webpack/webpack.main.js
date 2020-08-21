const path = require('path');
const webpack = require('webpack');
const { rootPath } = require('./base');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(rootPath, 'process', 'main.ts'),
  module: {
    rules: [
      {
        test: /\.[js|ts|jsx|tsx]$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  node: {
    __dirname: false
  },
  output: {
    path: path.join(rootPath, 'dist/'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  target: 'electron-main',
};

