import '../styles/app.scss';

import {Router, browserHistory, match} from 'react-router';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../app/store';
import {render} from 'react-dom';
import routes from '../app/routes';

const store = configureStore()

match({history: browserHistory, routes}, (error, redirectLocation, renderProps) => {
  if (error) {
    throw error;
  }

  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>,
    document.getElementById('app')
  );
})
