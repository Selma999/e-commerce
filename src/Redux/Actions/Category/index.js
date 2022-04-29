export function getAllProducts() {
  return async (dispatch) => {
    // Call the API
    const res = await fetch("https://fakestoreapi.com/products");

    const allProducts = await res.json();

    // Update payload in reducer on success
    dispatch({
      type: "FETCH_ALL_PRODUCTS",
      payload: allProducts,
    });

    return allProducts;
  };
}

export function getCategoryJewelery() {
  return async (dispatch) => {
    // Call the API
    const res = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );

    const jewelery = await res.json();

    // Update payload in reducer on success
    dispatch({
      type: "FETCH_JEWELERY_CATEGORY",
      payload: jewelery,
    });

    return jewelery;
  };
}

export function getCategoryElectronics() {
  return async (dispatch) => {
    // Call the API
    const res = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );

    const electronics = await res.json();

    // Update payload in reducer on success
    dispatch({
      type: "FETCH_ELECTRONICS_CATEGORY",
      payload: electronics,
    });

    return electronics;
  };
}

// Redux-only actions

export const updateElectronicsProducts = (products) => {
  return (dispatch) =>
    dispatch({ type: "UPDATE_ELECTRONICS_PRODUCTS", payload: products });
};

export const updateJeweleryProducts = (products) => {
  return (dispatch) =>
    dispatch({ type: "UPDATE_JEWELERY_PRODUCTS", payload: products });
};

export function updateAllProducts(products) {
  return (dispatch) =>
    dispatch({ type: "UPDATE_ALL_PRODUCTS", payload: products });
}
