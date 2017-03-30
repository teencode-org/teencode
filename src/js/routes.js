import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ApplicationPage from './components/application/Index';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="/apply" component={ApplicationPage} />
  </Route>
)
