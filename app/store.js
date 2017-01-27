import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import reducer from './reducers';
import {routerMiddleware} from 'react-router-redux';

export default function configureStore ({initialState} = {}) {
  return createStore(reducer, initialState, compose(
    applyMiddleware(routerMiddleware),
    typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ));
}
