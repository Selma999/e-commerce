const initialState = { products: [] };

function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALL_PRODUCTS_SUCCESS": {
      return { ...state, products: action.payload };
    }

    case "UPDATE_SINGLE_PRODUCT": {
      const { products } = state;

      // const updatedProducts = [...products];

      // for (let i = 0; i < updatedProducts?.length; i++) {
      //   const product = updatedProducts[i];

      //   if (product.id === action.payload.id) {
      //     updatedProducts[i] = action.payload;
      //   }
      // }

      const updatedProducts = products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }

        return product;
      });

      return {
        ...state,
        products: updatedProducts,
      };
    }

    default:
      return state;
  }
}

export default catalogReducer;
