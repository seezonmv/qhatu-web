import React, { useState } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import TokenService from '../services/TokenService';

const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState(TokenService.getUserData());
  const refreshUserData = () => {
    setUserData(TokenService.getUserData());
  };

  const globalContext = {
    userData: userData,
    refreshUserData: refreshUserData,
  };

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
