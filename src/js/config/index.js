let commonConfig = require('./common');
let config;

if (process.env.BACKEND_APP === 'production') {
  config = require('./prod');
} else {
  config = require('./dev');
}

module.exports = Object.assign({}, commonConfig, config);
