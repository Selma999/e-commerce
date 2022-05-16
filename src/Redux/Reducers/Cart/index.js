let initialState = JSON.parse(localStorage.getItem("cartState"));

if (!initialState) {
  initialState = {
    products: [],
    totalCount: 0,
  };
}

function cartReducer(state = initialState, action) {
  let updatedState;

  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const cartProducts = [...state.products];
      let totalCount = state.totalCount;

      let foundProduct;
      for (let i = 0; i < cartProducts.length; i++) {
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

      updatedState = {
        ...state,
        products: cartProducts,
        totalCount: countProductsInCart,
      };
      break;
    }
    case "DELETE_PRODUCT_FROM_CART": {
      let products = [...state.products];
      let totalCount = state.totalCount;
      let foundProduct;
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === action.payload.id) {
          foundProduct = products[i];
        }
      }

      foundProduct.productCount--;

      if (foundProduct.productCount === 0) {
        products = products.filter(({ id }) => id !== action.payload.id);
      }

      const countProductsInCart = totalCount - 1;

      updatedState = {
        ...state,
        products,
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
