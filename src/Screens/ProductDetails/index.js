import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import CardDescription from "../../components/Card/CardDescription";
import Container from "../../components/Container";
import Footer from "../../Footer";
import Header from "../../Header";
import Loader from "../../components/Loader";
import Button from "../../components/Button";

import { addProductToCart } from "../../Redux/Actions/Product";
import { deleteProductFromCart } from "../../Redux/Actions/Product";

const ProductDetailsPage = (props) => {
  const [inProgress, setInProgress] = useState(false);
  const { product } = props;
  const { productId } = useParams();

  const dispatch = useDispatch();

  const fetchSingleProduct = async (id) => {
    // Call the API
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    const product = await res.json();

    // Update payload in reducer
    dispatch({
      type: "FETCH_SINGLE_PRODUCT",
      payload: product,
    });

    return product;
  };

  // const clickCheckoutHandler = () => {
  //   navigate("/checkout");
  // };

  // const addToCart = () => {
  //   try {
  //     props.addProductToCart(product);
  //     toast.success("You've added this product to cart.");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const deleteFromCart = () => {
    if (inProgress) return;
    try {
      setInProgress(true);
      debugger;
      props.deleteProductFromCart(product, productId);
    } catch (err) {
      console.log(err);
    } finally {
      setInProgress(false);
    }
  };

  useEffect(async () => {
    if (inProgress) return;

    try {
      setInProgress(true);
      if (productId && productId !== "") {
        await fetchSingleProduct(productId);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setInProgress(false);
    }
  }, []);

  if (!product) return null;

  const { productCode, price, image, title } = product;

  return (
    <div>
      <Header />
      <div className="product__container">
        <Container className="product-container">
          {inProgress ? (
            <Loader />
          ) : (
            <>
              <CardDescription
                product={product}
                productCode={productCode}
                productPrice={price}
                productDetails={title}
                src={image}
                className="product__description"
                addChekoutButtons
              />
              <div>
                <Button buttonTitle="Delete product" onClick={deleteFromCart} />
              </div>
            </>
          )}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    product: store.product.product,
  };
};
export default connect(mapStateToProps, {
  addProductToCart,
  deleteProductFromCart,
})(ProductDetailsPage);
