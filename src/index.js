import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './routes/App';

const container = document.getElementById('app');

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  // eslint-disable-next-line comma-dangle
  container
);
