import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';

const Register = () => {
  return (
    <>
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
        />
        <label htmlFor="txtFirstName">Nombres</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          name="txtLastName"
          placeholder="Apellidos"
        />
        <label htmlFor="txtLastName">Apellidos</label>
      </div>
      <div className="form-floating">
        <input
          type="tel"
          className="form-control"
          name="txtDocumentNumber"
          placeholder="DNI"
        />
        <label htmlFor="txtDocumentNumber">DNI</label>
      </div>
      <div className="form-floating">
        <input
          type="tel"
          className="form-control"
          name="txtPhoneNumber"
          placeholder="Telefono Movil"
        />
        <label htmlFor="txtPhoneNumber">Telefono Movil</label>
      </div>
      <div className="form-floating">
        <input
          type="tel"
          className="form-control"
          name="txtAddress"
          placeholder="Dirección"
        />
        <label htmlFor="txtAddress">Dirección</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          name="txtPassword"
          placeholder="Contraseña"
        />
        <label htmlFor="txtPassword">Contraseña</label>
      </div>
      <div className="d-grid gp-2 mx-auto">
        <button className="btn btn-lg btn-primary mb-2">Registrar</button>
        <Link className="btn btn-lg btn-default" to="/login">
          Regresar
        </Link>
      </div>
    </>
  );
};

export default Register;
