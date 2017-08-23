let commonConfig = require('./common');
let config;

if (process.ENV === 'production') {
  config = require('./dev');
} else {
  config = require('./prod');
}

module.exports = Object.assign({}, commonConfig, config);
