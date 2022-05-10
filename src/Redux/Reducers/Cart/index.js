let initialState = JSON.parse(localStorage.getItem("cartState"));

if (!initialState) {
  initialState = {
    products: [],
    totalCount: 0,
  };
}

console.log("initialState:", initialState);

function cartReducer(state = initialState, action) {
  let updatedState;

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

      if (!foundProduct) {
        let product = { ...action.payload, productCount: 1 };
        cartProducts.push(product);
      } else {
        foundProduct.productCount++;
      }

      const countProductsInCart = totalCount + 1;
      console.log("totalCount", countProductsInCart);

      updatedState = {
        ...state,
        products: cartProducts,
        totalCount: countProductsInCart,
      };
      break;
    }

    default: {
      updatedState = state;
      break;
    }
  }

  localStorage.setItem("cartState", JSON.stringify(updatedState));

  return updatedState;
}

export default cartReducer;
