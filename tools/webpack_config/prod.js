import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import commonConfig from './common';


const PATH_ROOT = path.resolve(__dirname, '..', '..');

const entryPath = path.resolve(PATH_ROOT, 'src', 'js', 'index.js');

export default Object.assign({}, commonConfig, {
  debug: false,
  devtool: 'cheap-module-source-map',
  entry: entryPath,
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    ...commonConfig.plugins
  ]
});
