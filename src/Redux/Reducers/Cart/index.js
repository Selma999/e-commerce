const initialState = {
  products: [],
  totalCount: 0,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const cartProducts = [...state.products];
      let totalCount = state.totalCount;

      console.log("cartProducts", cartProducts);
      console.log("product", action.payload);

      let foundProduct;
      for (let i = 0; i < cartProducts.length; i++) {
        console.log("action payload", action.payload.id);
        if (cartProducts[i].id === action.payload.id) {
          foundProduct = cartProducts[i];
        }
      }

      debugger;
      if (!foundProduct) {
        let product = { ...action.payload, productCount: 1 };
        cartProducts.push(product);
      } else {
        foundProduct.productCount++;
      }

      const countProductsInCart = totalCount + 1;
      console.log("totalCount", countProductsInCart);

      return {
        ...state,
        products: cartProducts,
        totalCount: countProductsInCart,
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
