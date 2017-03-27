import webpack from 'webpack';
import path from 'path';

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'dist');
const entryPath = path.resolve(__dirname, 'src', 'js', 'index.js');

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    entryPath
  ],
  target: 'web', // bundle app the way web browsers can understand
  output: {
    path: buildPath, // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      SEGMENT_KEY: JSON.stringify(process.env.SEGMENT_KEY || 'Tv6xwYgtVrVvvV8dxeM6nXjlr5RKugV3')
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether'
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
        test: /\.(png|jpg|gif)$/,
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
