export function submitCheckoutForm(form) {
  return (dispatch) =>
    dispatch({ type: "SUBMIT_CHECKOUT_FORM", payload: form });
}
