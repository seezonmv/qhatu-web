import { createContext } from 'react';

const GlobalContext = createContext({
  userData: null,
  refreshUserData: () => {},
  alertMessage: null,
  refreshAlertMessage: () => {},
  modal: null,
  refreshModal: () => {},
});

export default GlobalContext;
