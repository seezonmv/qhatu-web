import React, { useState } from 'react';
import GlobalContext from '../contexts/GlobalContext';
import TokenService from '../services/TokenService';

const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState(TokenService.getUserData());

  const [alertMessage, setAlertMessage] = useState({
    visibility: false,
    message: '',
  });

  const [modal, setModal] = useState({
    visibility: false,
    title: '',
    subtitle: '',
    callback: () => {},
  });

  const refreshUserData = () => {
    setUserData(TokenService.getUserData());
  };

  const refreshAlertMessage = ({ visibility, message }) => {
    setAlertMessage({
      visibility: visibility,
      message: message,
    });
  };

  const refreshModal = ({ visibility, title, subtitle, callback }) => {
    setModal({
      visibility: visibility,
      title: title,
      subtitle: subtitle,
      callback: callback,
    });
  };

  const globalContext = {
    userData: userData,
    refreshUserData: refreshUserData,
    alertMessage: alertMessage,
    refreshAlertMessage: refreshAlertMessage,
    modal: modal,
    refreshModal: refreshModal,
  };

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
