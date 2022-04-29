const initialState = { form: [] };

function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case "SUBMIT_CHECKOUT_FORM": {
      return {
        ...state,
        form: action.payload,
      };
    }

    default:
      return state;
  }
}

export default paymentReducer;
