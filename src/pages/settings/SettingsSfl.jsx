import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QhatuAction from '../../core/actions/qhatuAction';
import AuthenticationService from '../../core/services/AuthenticationService';
import SettingsStl from './SettingsStl'

const SettingsSfl = () => {
    const history = useHistory();
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.alertMessage);
  const userData = useSelector((state) => state.userData);

  console.log(userData);
  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refDocumentNumber = useRef(null);

  useEffect(() => {
      refFirstName.current.value = userData.name;
      refLastName.current.value = userData.last_name;
      refDocumentNumber.current.value = userData.document_number;
    return () => {
      dispatch(QhatuAction.alertMessageAction(false));
      closeModal();
    };
  }, []);

  const closeModal = () => {
    dispatch(QhatuAction.modalAction(false));
  };

  const handleClickSignUp = async () => {
      const customerId = userData.id;
    const firstName = refFirstName.current?.value;
    const lastName = refLastName.current?.value;
    const documentNumber = refDocumentNumber.current?.value;

    if (
      firstName &&
      lastName &&
      documentNumber 
    ) {
      const userToSignUp = {
        customerId,
        firstName,
        lastName,
        documentNumber,
      };
      dispatch(QhatuAction.backdropAction(true));
      const resultSignUp = await AuthenticationService.SignUp(userToSignUp);
      dispatch(QhatuAction.backdropAction(false));
      if (resultSignUp.success) {
        dispatch(
          QhatuAction.modalAction(
            true,
            () => {
              history.push('/home');
            },
            'Guardado 😁',
            'Se actualizo su información correctamente'
          )
        );
      }
      //}
    } else {
      dispatch(
        QhatuAction.alertMessageAction(
          true,
          'Debe ingresar nombres, apellidos y documento para poder actualizar sus datos.'
        )
      );
    }
  };

  const handleChangeInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;
  };

  return (
    <SettingsStl
    userData={userData}
    alertMessage={alertMessage}
    refFirstName={refFirstName}
    refLastName={refLastName}
    refDocumentNumber={refDocumentNumber}
    handleChangeInput={handleChangeInput}
    handleClickSignUp={handleClickSignUp} />
  )
}

export default SettingsSfl