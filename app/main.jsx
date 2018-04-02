import 'lib/polyfills';
import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './lib/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from 'components/App'; // eslint-disable-line

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
