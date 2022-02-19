import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { Provider } from 'react-redux';
import qhatuStore from './core/stores/qhatuStore';

ReactDOM.render(
  <Provider store={qhatuStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
