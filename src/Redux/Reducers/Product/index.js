const initialState = {};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_SINGLE_PRODUCT": {
      return { ...state, product: action.payload };
    }

    default:
      return state;
  }
}

export default productReducer;
