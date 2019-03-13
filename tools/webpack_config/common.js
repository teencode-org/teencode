const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const featureFlags =  require('../featureFlags');


const PATH_ROOT = path.resolve(__dirname, '..', '..');

const nodeModulesPath = path.resolve(PATH_ROOT, 'node_modules');
const buildPath = path.resolve(PATH_ROOT, 'dist');
const entryPath = path.resolve(PATH_ROOT, 'src', 'js', 'index.js');
const imagesPath = path.resolve(PATH_ROOT, 'src', 'img', 'static_images');
console.log({featureFlags})
const GLOBALS = {
  'teencode.feature': featureFlags,
  'process.env.NODE_ENV': JSON.stringify('production'),
  'process.env.FB_APPID': JSON.stringify(process.env.FB_APPID),
  'process.env.DISQUS_SHORT_NAME': JSON.stringify(process.env.DISQUS_APP_NAME),
  'process.env.SENTRY_DSN': JSON.stringify('https://ac081c9adb4b4fea99d7446120d1d943@sentry.io/1221497')
};

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './src'
  },

  target: 'web',
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether'
    }),
    new webpack.DefinePlugin(GLOBALS),
    new CopyWebpackPlugin([
      { context: imagesPath, from: '*', to: 'img' }
    ])
  ],
  module: {
    rules: [
      {
        test: /src\/js\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // SASS
      {
        test: /css\/.+.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      }
    ]
  },
  resolve: {
    alias: {
      Utils: path.resolve(PATH_ROOT, 'src/js/utils/'),
      Actions: path.resolve(PATH_ROOT, 'src/js/actions/'),
      Images: path.resolve(PATH_ROOT, 'src/img/'),
      Components: path.resolve(PATH_ROOT, 'src/js/components/'),
    }
  }
};
