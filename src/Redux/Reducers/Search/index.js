const initialState = {};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_SEARCH_RESULTS": {
      return { ...state, results: action.payload };
    }

    default:
      return state;
  }
}

export default searchReducer;
