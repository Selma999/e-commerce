export function getCategories() {
  return async (dispatch) => {
    // Call the API
    const res = await fetch("https://fakestoreapi.com/products/categories");

    const categories = await res.json();

    // Update payload in reducer on success

    dispatch({
      type: "FETCH_ALL_CATEGORIES",
      payload: categories,
    });

    return categories;
  };
}
