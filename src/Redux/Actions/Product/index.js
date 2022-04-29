// export function fetchProduct(id) {}

export function addProductToCart(product) {
  return async (dispatch) => {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: product,
    });
  };
}

export function deleteProductFromCart(id) {
  return async (dispatch) => {
    // Call the API
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: "DELETE_PRODUCT_FROM_CART",
    });
  };
}

export function updateProductInCart() {
  return async (dispatch) => {
    // Call the API
    await fetch("https://fakestoreapi.com/products/7", {
      method: "PUT",
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
      }),
    });
  };
}
