const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const commonConfig = require('./common');


const PATH_ROOT = path.resolve(__dirname, '..', '..');

const entryPath = path.resolve(PATH_ROOT, 'src', 'js', 'index.js');

module.exports = Object.assign({}, commonConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: entryPath,
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    ...commonConfig.plugins
  ]
});
