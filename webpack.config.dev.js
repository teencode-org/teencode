require('dotenv').config();

import webpack from 'webpack';
import path from 'path';
import featureFlags from './tools/featureFlags';

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'dist');
const entryPath = path.resolve(__dirname, 'src', 'js', 'index.js');

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    entryPath
  ],
  target: 'web',
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether'
    }),
    new webpack.DefinePlugin({
      'teencode.feature': featureFlags,
      'process.env.FB_APPID': JSON.stringify(process.env.FB_APPID)
    })
  ],
  module: {
    loaders: [
      {
        test: /src\/js\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // SASS
      {
        test: /css\/.+.(scss|css)$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};
