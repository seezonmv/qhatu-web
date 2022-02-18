import { createContext } from 'react';

const GlobalContext = createContext({
  userData: null,
  refreshUserData: () => {},
});

export default GlobalContext;
