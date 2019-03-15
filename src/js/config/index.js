const prod = require('./prod');
const dev = require('./dev');

let commonConfig = require('./common');
let config;

if (process.env.NODE_ENV === 'production') {
  config = prod;
} else {
  config = dev;
}

module.exports = Object.assign({}, commonConfig, config);
