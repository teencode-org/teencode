const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const featureFlags =  require('./tools/featureFlags');


const GLOBALS = {
  'teencode.feature': featureFlags,
  'process.env.NODE_ENV': JSON.stringify('production'),
  'process.env.FB_APPID': JSON.stringify(process.env.FB_APPID),
  'process.env.DISQUS_SHORT_NAME': JSON.stringify(process.env.DISQUS_APP_NAME),
  'process.env.SENTRY_DSN': JSON.stringify('https://ac081c9adb4b4fea99d7446120d1d943@sentry.io/1221497')
};

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'dist')
  },
  module: {
    rules: [
      {
        test: /src\/js\/.+.js$/,
        // exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /src\/scss\/.+.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether'
    })
  ],
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, 'src/js/utils/'),
      Actions: path.resolve(__dirname, 'src/js/actions/'),
      Images: path.resolve(__dirname, 'src/img/'),
      Components: path.resolve(__dirname, 'src/js/components/'),
    }
  }
}
