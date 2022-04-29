const initialState = {
  products: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const cartProducts = [...state.products];

      cartProducts.push(action.payload);

      return { ...state, products: cartProducts };
    }
    default:
      return state;
  }
}

export default cartReducer;
