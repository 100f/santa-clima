const webpack = require('webpack');
const { resolve, join } = require('path');
const { rootPath } = require('./base');

module.exports = {
  devtool: 'source-map',
  entry: ['core-js/stable', 'regenerator-runtime/runtime', resolve(rootPath, 'process', 'main.ts')],
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
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
    __dirname: false,
    __filename: false
  },
  output: {
    path: join(rootPath, 'dist/'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  target: 'electron-main',
};

