import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'tether'
import 'bootstrap/dist/js/bootstrap.min'
import '../scss/main.scss'

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)
