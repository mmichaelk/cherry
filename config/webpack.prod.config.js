const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(commonConfig, {
  output: {
    path: path.join(__dirname, './../build'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../public/favicons'),
      to: path.resolve(__dirname, '../build'),
    }]),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      warnings: false,
      sourceMap: true,
    }),
  ],
});
