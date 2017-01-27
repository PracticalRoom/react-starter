import {RouterContext, createMemoryHistory, match} from 'react-router'
import Application from '../../components/application';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from '../../store';
import {renderToString} from 'react-dom/server';
import routes from '../../routes';
import serialize from 'serialize-javascript'
import {syncHistoryWithStore} from 'react-router-redux';

export default function reactApp (req, res) {
  const memoryHistory = createMemoryHistory(req.url);
  const store = configureStore({history: memoryHistory});
  const history = syncHistoryWithStore(memoryHistory, store)

  match({history, routes}, (error, redirectLocation, renderProps) => {
    if (error) {
      return next(error)
    } else if (redirectLocation) {
      // Redirect with query parameters
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const content = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      res.render('react-app', {
        content,
        initialState: serialize(
          store.getState()
        )
      })
    }
  });
}
