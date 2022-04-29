const initialState = { categories: [] };

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALL_CATEGORIES": {
      return {
        ...state,
        categories: ["All products", ...(action.payload ?? [])],
      };
    }

    case "FETCH_ALL_PRODUCTS": {
      return { ...state, allProducts: action.payload };
    }

    case "FETCH_JEWELERY_CATEGORY": {
      return { ...state, jewelery: action.payload };
    }

    case "FETCH_ELECTRONICS_CATEGORY": {
      return { ...state, electronics: action.payload };
    }

    //

    case "UPDATE_JEWELERY_PRODUCTS": {
      return { ...state, jewelery: action.payload };
    }

    case "UPDATE_ELECTRONICS_PRODUCTS": {
      return { ...state, electronics: action.payload };
    }

    case "UPDATE_ALL_PRODUCTS": {
      return {
        ...state,
        allProducts: action.payload,
      };
    }

    default:
      return state;
  }
}

export default categoriesReducer;
