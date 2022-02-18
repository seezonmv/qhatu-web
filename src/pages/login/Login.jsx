import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import AuthenticationService from '../../core/services/AuthenticationService';
import Alert from '../../components/alert/Alert';
import RegexValidations from '../../core/pipes/RegexValidations';
import TokenService from '../../core/services/TokenService';
import GlobalContext from '../../core/contexts/GlobalContext';

const Login = () => {
  const { refreshUserData } = useContext(GlobalContext);
  const [showAlert, setShowAlert] = useState({
    visibility: false,
    message: '',
  });
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handleClickSignIn = async () => {
    const email = refEmail.current?.value;
    const password = refPassword.current?.value;

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
      setShowAlert({
        visibility: false,
        message: '',
      });
    } catch (error) {
      setShowAlert({
        visibility: true,
        message: 'Usuario y/o contraseña incorrecta.',
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

    setShowAlert({
      visibility: !isValid,
      message: messageValidation,
    });
  };

  return (
    <>
      <Logo />
      <br />
      <br />
      <h3 className="mb-3 fw-normal">Ingresar</h3>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          name="txtEmail"
          placeholder="Correo Electronico"
          ref={refEmail}
          onChange={handleChangeInput}
        />
        <label htmlFor="txtEmail">Correo Electronico</label>
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
          className="btn btn-lg btn-primary mb-2"
          onClick={handleClickSignIn}
          disabled={showAlert.visibility}
        >
          Ingresar
        </button>
        <Link className="btn btn-lg btn-success" to="/register">
          Registrar
        </Link>
        <div className="mt-3">
          {showAlert.visibility ? <Alert message={showAlert.message} /> : null}
        </div>
      </div>
    </>
  );
};

export default Login;
