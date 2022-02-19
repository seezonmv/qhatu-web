import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TokenService from '../../core/services/TokenService';
import QhatuAction from '../../core/actions/qhatuAction';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/home">
        Qhatu
      </Link>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <p
            className="nav-link px-3"
            onClick={() => {
              TokenService.removeUserData();
              dispatch(QhatuAction.userDataAction());
            }}
          >
            <FaSignOutAlt /> Cerrar Sesión
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
