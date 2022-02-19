import React, { useRef, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AuthenticationService from '../../core/services/AuthenticationService';
import RegexValidations from '../../core/pipes/RegexValidations';
import GlobalContext from '../../core/contexts/GlobalContext';
import RegisterStateless from './RegisterStateless';

const RegisterStateful = () => {
  const history = useHistory();

  const { alertMessage, refreshAlertMessage, modal, refreshModal } =
    useContext(GlobalContext);

  useEffect(() => {
    return () => {
      refreshAlertMessage({ visibility: false });
      refreshModal({ visibility: false });
    };
  }, []);

  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refEmail = useRef(null);
  const refDocumentNumber = useRef(null);
  const refPhoneNumber = useRef(null);
  const refAddress = useRef(null);
  const refPassword = useRef(null);

  const handleClickSignUp = async () => {
    const firstName = refFirstName.current?.value;
    const lastName = refLastName.current?.value;
    const email = refEmail.current?.value;
    const documentNumber = refDocumentNumber.current?.value;
    const phoneNumber = refPhoneNumber.current?.value;
    const address = refAddress.current?.value;
    const password = refPassword.current?.value;

    if (
      firstName &&
      lastName &&
      email &&
      documentNumber &&
      phoneNumber &&
      address &&
      password
    ) {
      const userToSignUp = {
        firstName,
        lastName,
        email,
        documentNumber,
        phoneNumber,
        address,
        password,
      };

      const resultSignUp = await AuthenticationService.SignUp(userToSignUp);
      if (resultSignUp.success) {
        refreshModal({
          visibility: true,
          title: 'Bienvenido 😁',
          subtitle: 'El usuario se registró correctamente.',
          callback: () => {
            history.push('/login');
          },
        });
      }
    } else {
      refreshAlertMessage({
        visibility: true,
        message:
          'Debe ingresar nombres, apellidos, correo y una contraseña para poderse registrar.',
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
        ? 'Debe ingresar un correo válido.'
        : 'Debe ingresar mas de 6 caracteres.';

    refreshAlertMessage({
      visibility: !isValid,
      message: messageValidation,
    });
  };

  return (
    <RegisterStateless
      modal={modal}
      alertMessage={alertMessage}
      refFirstName={refFirstName}
      refLastName={refLastName}
      refEmail={refEmail}
      refDocumentNumber={refDocumentNumber}
      refPhoneNumber={refPhoneNumber}
      refAddress={refAddress}
      refPassword={refPassword}
      handleChangeInput={handleChangeInput}
      handleClickSignUp={handleClickSignUp}
    />
  );
};

export default RegisterStateful;
