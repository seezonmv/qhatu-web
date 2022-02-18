import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaShoppingCart } from 'react-icons/fa';

const Menu = () => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/home">
              <FaHome /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/purchases">
              <FaShoppingCart /> Compras
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/settings">
              <FaTools /> Configuración
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
