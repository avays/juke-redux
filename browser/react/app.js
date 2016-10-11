'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux';
import store from './myRedux.js';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  document.getElementById('app')
);
