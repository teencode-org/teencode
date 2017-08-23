import Config from '../config';
import fetch from 'isomorphic-fetch';
import 'babel-polyfill';

const requestPath = (path, method, data = {}) => {
  if (method === 'GET' && data.length > 0) {
    return path + '?' + encodeURIComponent(JSON.stringify(data));
  }
  return path;
};

const requestBody = (data, method) => {
  return method === 'GET' ?
    null : JSON.stringify(data);
};

/**
* @return {Object} Headers containing auth details
*/
export function requestHeaders() {
  return new Headers({
    'Content-Type': 'application/json'
  });
}

/**
* @param {String} path: eg '/questions'
* @param {String} method: eg 'POST'
* @param {Object} data: eg {id: 1}
* @return {Object} fetch: to be used in views that check for success or failure
*/
export default function processRequest(path, method, data = {}) {
  let url = Config.host + requestPath(path, method, data);
  return fetch(url, {
    method  : method,
    headers : requestHeaders(),
    mode    : 'cors',
    cache   : 'default',
    body    : requestBody(data, method)
  })
  .then(response => response.json())
  .catch(err => {
    throw (err);
  });
}
