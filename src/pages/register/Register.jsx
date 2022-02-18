import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AuthenticationService from '../../core/services/AuthenticationService';
import RegexValidations from '../../core/pipes/RegexValidations';

import Alert from '../../components/alert/Alert';
import Logo from '../../components/logo/Logo';
import Modal from '../../components/modal/Modal';

const Register = () => {
  const history = useHistory();

  const [showAlert, setShowAlert] = useState({
    visibility: false,
    message: '',
  });

  const [modal, setModal] = useState({
    visibility: false,
    callback: () => {},
    title: '',
    subtitle: '',
  });

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
        setModal({
          visibility: true,
          title: 'Bienvenido 😁',
          subtitle: 'El usuario se registró correctamente.',
          callback: () => {
            history.push('/login');
          },
        });
      }
    } else {
      setShowAlert({
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

    setShowAlert({
      visibility: !isValid,
      message: messageValidation,
    });
  };

  return (
    <>
      {modal.visibility ? (
        <Modal
          callback={modal.callback}
          title={modal.title}
          subtitle={modal.subtitle}
        />
      ) : null}
      <Logo />
      <br />
      <br />
      <h3 className="mb-3 fw-normal">Registrar</h3>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          name="txtFirstName"
          placeholder="Nombres"
          ref={refFirstName}
          onChange={handleChangeInput}
        />
        <label htmlFor="txtFirstName">Nombres</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          name="txtLastName"
          placeholder="Apellidos"
          ref={refLastName}
          onChange={handleChangeInput}
        />
        <label htmlFor="txtLastName">Apellidos</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          name="txtEmail"
          placeholder="Apellidos"
          ref={refEmail}
          onChange={handleChangeInput}
        />
        <label htmlFor="txtEmail">Correo Electronico</label>
      </div>
      <div className="form-floating">
        <input
          type="tel"
          className="form-control"
          name="txtDocumentNumber"
          placeholder="DNI"
          ref={refDocumentNumber}
          onChange={handleChangeInput}
        />
        <label htmlFor="txtDocumentNumber">DNI</label>
      </div>
      <div className="form-floating">
        <input
          type="tel"
          className="form-control"
          name="txtPhoneNumber"
          placeholder="Telefono Movil"
          ref={refPhoneNumber}
          onChange={handleChangeInput}
        />
        <label htmlFor="txtPhoneNumber">Telefono Movil</label>
      </div>
      <div className="form-floating">
        <input
          type="tel"
          className="form-control"
          name="txtAddress"
          placeholder="Dirección"
          ref={refAddress}
          onChange={handleChangeInput}
        />
        <label htmlFor="txtAddress">Dirección</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          name="txtPassword"
          placeholder="Contraseña"
          ref={refPassword}
          onChange={handleChangeInput}
        />
        <label htmlFor="txtPassword">Contraseña</label>
      </div>
      <div className="d-grid gp-2 mx-auto">
        <button
          className="btn btn-lg btn-primary mb-2 mt-2"
          onClick={handleClickSignUp}
        >
          Registrar
        </button>
        <Link className="btn btn-lg btn-default" to="/login">
          Regresar
        </Link>
        <div className="mt-3">
          {showAlert.visibility ? <Alert message={showAlert.message} /> : null}
        </div>
      </div>
    </>
  );
};

export default Register;
