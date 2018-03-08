const webpack = require('webpack');
const path = require('path');

const buildDir = path.resolve(__dirname, './public');
const appDir = path.resolve(__dirname, './client/dev');

const config = {
  entry: [`${appDir}\\index.jsx`, `${appDir}\\header.jsx`],
  output: {
    path: buildDir,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: appDir,
        exclude: ['node_modules'],
        enforce: 'pre',
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      appDir,
    ],
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
