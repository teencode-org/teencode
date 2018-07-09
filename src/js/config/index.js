import prod from './prod';
import dev from './dev';

let commonConfig = require('./common');
let config;

if (process.env.NODE_ENV === 'production') {
  config = prod;
} else {
  config = dev;
}

export default Object.assign({}, commonConfig, config);
