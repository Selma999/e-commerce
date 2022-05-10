const initialState = {
  products: [],
};

function checkoutReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_PURCHASED_PRODUCTS": {
      const cartProducts = [...state.products];
      return {
        ...state,
        products: cartProducts,
      };
    }

    default:
      return state;
  }
}

export default checkoutReducer;
