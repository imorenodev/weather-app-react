import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import App from '../containers/App';
import HomeContainer from '../containers/HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';
import DetailsContainer from '../containers/DetailsContainer';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path='home' component={HomeContainer} />
      <Route path='forecast' component={ForecastContainer} />
      <Route path='details' component={DetailsContainer} />
    </Route>
  </Router>
);
