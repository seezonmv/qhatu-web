import { createStore } from 'redux';
import TokenService from '../services/TokenService';
import qhatuReducer from '../reducers/qhatuReducer';

const qhatuState = {
  userData: TokenService.getUserData(),
  countShoppingCart: 0,
  shoppingCart: [],
  alertMessage: {
    open: false,
    message: '',
  },
  backdrop: {
    open: false,
  },
  modal: {
    open: false,
    title: '',
    subtitle: '',
    callback: () => {},
  },
};

const qhatuStore = createStore(
  qhatuReducer,
  qhatuState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default qhatuStore;
