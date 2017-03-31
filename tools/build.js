/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production'; // assures the babel dev config for hot reloading doesn't apply
console.log('generating minified bundle for production via webpack. This will take a moment. . .'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) { // a fatal error occured. Stop here
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    return jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded
  console.log('Your app has been compiled in production mode and written to /dist. Roll'.green);

  return 0;
})
