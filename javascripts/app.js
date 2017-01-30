import '../styles/app.scss';

import {Router, browserHistory, match} from 'react-router';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from '../app/store';
import {render} from 'react-dom';
import routes from '../app/routes';
import {syncHistoryWithStore} from 'react-router-redux';

const store = configureStore({history: browserHistory, initialState: window.initialState});
const history = syncHistoryWithStore(browserHistory, store);

match({history, routes}, (error, redirectLocation, renderProps) => {
  if (error) {
    throw error;
  }

  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>,
    document.getElementById('app')
  );
});
