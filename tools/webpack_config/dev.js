require('dotenv').config();

const PATH_ROOT = path.resolve(__dirname, '..', '..');

import webpack from 'webpack';
import path from 'path';
import commonConfig from './common';

const entryPath = path.resolve(PATH_ROOT, 'src', 'js', 'index.js');

console.log(entryPath);

export default Object.assign({}, commonConfig, {
  debug: true,
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
    new webpack.NoErrorsPlugin(),
    ...commonConfig.plugins
  ]
});
