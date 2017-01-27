import {RouterContext, createMemoryHistory, match} from 'react-router'
import Application from '../../components/application';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from '../../store';
import {renderToString} from 'react-dom/server';
import routes from '../../routes';

export default function reactApp (req, res) {
  const history = createMemoryHistory(req.url);
  const store = configureStore();

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
        content
      })
    }
  });
}
