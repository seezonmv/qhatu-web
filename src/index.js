import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import qhatuStore from './core/stores/qhatuStore';

const theme = createTheme();

ReactDOM.render(
  <Provider store={qhatuStore}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);
