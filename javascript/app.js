import '../styles/app.scss';

import {Router, browserHistory, match} from 'react-router';
import React from 'react';
import {render} from 'react-dom';
import routes from '../app/routes';

match({history: browserHistory, routes}, (error, redirectLocation, renderProps) => {
  if (error) {
    throw error
  }

  render(
    <Router {...renderProps} />,
    document.getElementById('app')
  )
})
