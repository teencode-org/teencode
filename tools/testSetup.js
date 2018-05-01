/* eslint-disable no-var*/
var expect = require('expect');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

var mount = enzyme.mount;

enzyme.configure({ adapter: new Adapter() });
var shallow = require('enzyme').shallow;
var sinon = require('sinon');

process.env.NODE_ENV = 'test';

// Register babel so that it will transpile ES6 to ES5
// before our tests run.
require('babel-register')();

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = () => {return null;};
require.extensions['.png'] = () => {return null;};
require.extensions['.jpg'] = () => {return null;};
require.extensions['.jpeg'] = () => {return null;};

// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.teencode = {feature: {}};

global.expect = expect;
global.mount = mount;
global.shallow = shallow;
global.sinon = sinon;

global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document; //eslint-disable-line no-undef