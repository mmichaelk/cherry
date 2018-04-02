import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import ui from './../reducers/ui.js';

const reducers = combineReducers({
  router,
  ui,
});

export default reducers;

