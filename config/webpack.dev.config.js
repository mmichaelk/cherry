const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');

module.exports = merge(commonConfig, {
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
          plugins: ['babel-plugin-styled-components'],
        },
      },
    ],
  },

  devtool: 'source-map',
  devServer: {
    contentBase: 'public/',
    inline: true, // autorefresh
    port: 3350,
    disableHostCheck: true,
    historyApiFallback: true,
  },
});
