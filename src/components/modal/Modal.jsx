import React from 'react';
import './Modal.css';

const Modal = ({ callback, title, subtitle }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <button className="modal-close-button">x</button>
        <div className="modal-confirm">
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <div>
            <button className="btn btn-success" onClick={callback}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
