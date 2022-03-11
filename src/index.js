import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import qhatuStore from './core/stores/qhatuStore';
import qhatuThem from './core/theme/qhatuTheme';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <Provider store={qhatuStore}>
    <ThemeProvider theme={qhatuThem}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);
