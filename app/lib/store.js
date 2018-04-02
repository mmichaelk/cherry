import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';

export const history = createHistory();

const defaultState = {};

const middlewares = [routerMiddleware(history)];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
}

export const store = createStore(
  reducers,
  defaultState,
  applyMiddleware(...middlewares),
);

export default store;

