import {IndexRoute, Route} from 'react-router';
import About from './routes/about';
import Application from './routes/application';
import Home from './routes/home';
import React from 'react';

export default (
  <Route path="/" component={Application}>
    <IndexRoute component={Home} />

    <Route path="about" component={About} />
  </Route>
);
