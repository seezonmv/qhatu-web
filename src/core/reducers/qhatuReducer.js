import TokenService from '../services/TokenService';

const qhatuReducer = (state, action) => {
  switch (action.type) {
    case '@qhatu/callUserData':
      return {
        ...state,
        userData: TokenService.getUserData(),
      };
    case '@qhatu/callAlertMessage':
      return {
        ...state,
        alertMessage: action.payload,
      };
    case '@qhatu/callModal':
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default qhatuReducer;
