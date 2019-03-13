import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'tether';
import 'bootstrap/dist/js/bootstrap.min';
import '../scss/main.scss';
import './utils/sentry';

render (
  <Provider store={configureStore()}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
