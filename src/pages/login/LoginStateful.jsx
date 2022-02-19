import React, { useContext, useEffect, useRef } from 'react';
import AuthenticationService from '../../core/services/AuthenticationService';
import RegexValidations from '../../core/pipes/RegexValidations';
import TokenService from '../../core/services/TokenService';
import GlobalContext from '../../core/contexts/GlobalContext';
import LoginStatetess from './LoginStateless';

const LoginStateful = () => {
  const { refreshUserData, alertMessage, refreshAlertMessage } =
    useContext(GlobalContext);

  const refEmail = useRef(null);
  const refPassword = useRef(null);

  useEffect(() => {
    return () => {
      refreshAlertMessage({
        visibility: false,
        message: '',
      });
    };
  }, []);

  const handleClickSignIn = async () => {
    const email = refEmail.current?.value;
    const password = refPassword.current?.value;

    if (email && password) {
      const userToSignIn = {
        email,
        password,
      };

      try {
        const resultSignIn = await AuthenticationService.SignIn(userToSignIn);
        if (resultSignIn.success) {
          TokenService.setUserData(resultSignIn.data);
          refreshUserData();
        }
        refreshAlertMessage({
          visibility: false,
          message: '',
        });
      } catch (error) {
        refreshAlertMessage({
          visibility: true,
          message: 'Usuario y/o contraseña incorrecta.',
        });
      }
    } else {
      refreshAlertMessage({
        visibility: true,
        message:
          'Debe ingresar un usuario y contraseña para entrar a la aplicación',
      });
    }
  };

  const handleChangeInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;

    const isValid =
      nameInput === 'txtEmail'
        ? RegexValidations.ValidateEmail(valueInput)
        : RegexValidations.ValidatePassword(valueInput);
    let messageValidation =
      nameInput === 'txtEmail'
        ? 'El correo no es válido'
        : 'La contraseña debe tener un minimo de 6 caracteres.';

    refreshAlertMessage({
      visibility: !isValid,
      message: messageValidation,
    });
  };

  return (
    <LoginStatetess
      refEmail={refEmail}
      refPassword={refPassword}
      handleChangeInput={handleChangeInput}
      handleClickSignIn={handleClickSignIn}
      alertMessage={alertMessage}
    />
  );
};

export default LoginStateful;
