import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
<<<<<<< HEAD:src/js/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'tether';
import 'bootstrap/dist/js/bootstrap.min';
import '../scss/main.scss';
=======
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
>>>>>>> develop:src/index.js

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)
