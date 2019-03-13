const dotenv = require('dotenv');
dotenv.config()

const webpack = require('webpack');
const path = require('path');
const PATH_ROOT = path.resolve(__dirname, '..', '..');


const commonConfig = require('./common')


const entryPath = path.resolve(PATH_ROOT, 'src', 'js', 'index.js');

module.exports = Object.assign({}, commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    entryPath
  ],
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    ...commonConfig.plugins
  ]
});
