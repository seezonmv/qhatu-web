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
    case '@qhatu/callShoppingCart':
      let newProduct = action.payload;
      let currentShoppingCart = state.shoppingCart;
      let exists = false;
      let newShoppingCart = currentShoppingCart.map((item) => {
        if (item.id === newProduct.id) {
          exists = true;
          item.quantity = item.quantity + 1;
        }
        return item;
      });
      if (!exists) {
        newShoppingCart.push(newProduct);
      }
      console.log(newShoppingCart);
      return {
        ...state,
        shoppingCart: [...newShoppingCart],
      };
    default:
      return state;
  }
};

export default qhatuReducer;
