import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import Alert from '../../components/alert/Alert';
import Modal from '../../components/modal/Modal';

const RegisterStateless = ({
  modal,
  alertMessage,
  refFirstName,
  refLastName,
  refEmail,
  refDocumentNumber,
  refPhoneNumber,
  refAddress,
  refPassword,
  handleChangeInput,
  handleClickSignUp,
}) => {
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
          {alertMessage.visibility ? (
            <Alert message={alertMessage.message} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default RegisterStateless;
