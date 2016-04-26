import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='home' component={Home} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
