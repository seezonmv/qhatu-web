const userDataAction = () => {
  return {
    type: '@qhatu/callUserData',
  };
};

const alertMessageAction = (visibility = false, message = '') => {
  return {
    type: '@qhatu/callAlertMessage',
    payload: {
      visibility: visibility,
      message: message,
    },
  };
};

const modalAction = (
  visibility = false,
  callback = () => {},
  title = '',
  subtitle = ''
) => {
  return {
    type: '@qhatu/callModal',
    payload: {
      visibility: visibility,
      callback: callback,
      title: title,
      subtitle: subtitle,
    },
  };
};

const QhatuAction = {
  userDataAction,
  alertMessageAction,
  modalAction,
};

export default QhatuAction;
