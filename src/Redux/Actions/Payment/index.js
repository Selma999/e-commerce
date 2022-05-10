export function submitCheckoutForm(form) {
  return (dispatch) =>
    dispatch({ type: "SUBMIT_CHECKOUT_FORM", payload: form });
}

export function showPurchasedProducts(data) {
  return (dispatch) => {
    dispatch({ type: "SHOW_PURCHASED_PRODUCTS", payload: data });
  };
}
