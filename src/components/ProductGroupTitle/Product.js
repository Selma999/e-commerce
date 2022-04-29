import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CardDescription from "../Card/CardDescription";

import { fetchAllProductsFromCatalog } from "../../Redux/Actions/Catalog";

function Product(props) {
  console.log(props);
  const { id, productCode, price, image } = props;

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchSingleProduct = async (id) => {
    // Call the API
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    const response = await res.json();

    // Update payload in reducer
    dispatch({
      type: "FETCH_SINGLE_PRODUCT",
      payload: response.data,
    });
    return response;
  };

  useEffect(async () => {
    try {
      if (productId && productId !== "") await fetchSingleProduct(productId);
    } catch (err) {
      console.log(err);
    }
  }, [productId]);

  return (
    <div key={id}>
      <Link to={`/product/${id}`}>
        <div>Shopping cart</div>
        <CardDescription
          productCode={productCode}
          productPrice={price}
          src={image}
        />
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </Link>
    </div>
  );
}

const mapStateToProps = (store) => {
  return { product: store.product, products: store.catalog.products };
};

export default connect(mapStateToProps, {
  getProducts: fetchAllProductsFromCatalog,
})(Product);
