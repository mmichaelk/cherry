require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const ComponentDirectoryPlugin = require('component-directory-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './../app/main.jsx'),
  output: {
    path: path.join(__dirname, './../public/build'),
    filename: 'bundle.js',
  },
  resolve: {
    plugins: [
      new ComponentDirectoryPlugin(),
    ],
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, './../app'),
      'node_modules',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['env', 'react'],
            },
          },
          {
            loader: 'react-svg-loader',
            query: {
              svgo: {
                plugins: [
                  { removeTitle: true },
                  { cleanupIDs: false },
                ],
                floatPrecision: 3,
              },
            },
          },
        ],
      },
      {
        test: [/\.gif$/, /\.jpe?g$/, /\.png$/, /\.mp4$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './../public/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        API_HOST: JSON.stringify(process.env.API_HOST),
      },
    }),
  ],
};
