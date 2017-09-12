let commonConfig = require('./common');
let config;

if (process.env.NODE_ENV === 'production') {
  config = require('./prod');
} else {
  config = require('./dev');
}

module.exports = Object.assign({}, commonConfig, config);
