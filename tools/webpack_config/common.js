import webpack from 'webpack';
import path from 'path';
import featureFlags from '../featureFlags';

const PATH_ROOT = path.resolve(__dirname, '..', '..');

const nodeModulesPath = path.resolve(PATH_ROOT, 'node_modules');
const buildPath = path.resolve(PATH_ROOT, 'dist');
const entryPath = path.resolve(PATH_ROOT, 'src', 'js', 'index.js');

const GLOBALS = {
  'teencode.feature': featureFlags,
  'process.env.NODE_ENV': JSON.stringify('production'),
  'process.env.FB_APPID': JSON.stringify(process.env.FB_APPID),
  'process.env.DISQUS_SHORT_NAME': JSON.stringify(process.env.DISQUS_APP_NAME)
};

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './src'
  },

  noInfo: false,
  target: 'web',
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js'
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
    new webpack.DefinePlugin(GLOBALS)
  ],
  module: {
    loaders: [
      {
        test: /src\/js\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // SASS
      {
        test: /css\/.+.(scss|css)$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
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
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
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
