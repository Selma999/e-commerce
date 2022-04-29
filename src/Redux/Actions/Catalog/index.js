// with real response from api
export function fetchAllProductsFromCatalog() {
  return async (dispatch) => {
    // Call the API
    const res = await fetch("https://fakestoreapi.com/products");

    const products = await res.json();

    // Update payload in reducer on success
    dispatch({
      type: "FETCH_ALL_PRODUCTS_SUCCESS",
      payload: products,
    });

    return products;
  };
}

export function fetchSortedProducts() {
  return async (dispatch) => {
    // Call the API
    const res = await fetch("https://fakestoreapi.com/products?sort=desc");

    const sortedProducts = await res.json();

    // Update payload in reducer on success
    dispatch({
      type: "FETCH_SORTED_PRODUCTS",
      payload: sortedProducts,
    });

    return sortedProducts;
  };
}
