import { createContext } from 'react';

const GlobalContext = createContext({
  userData: null,
  refreshUserData: () => {},
  alertMessage: null,
  refreshAlertMessage: () => {},
});

export default GlobalContext;
