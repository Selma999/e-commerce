import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import CardDescription from "../../components/Card/CardDescription";
import Container from "../../components/Container";
import Footer from "../../Footer";
import Header from "../../Header";
import { addProductToCart } from "../../Redux/Actions/Product";
import { toast } from "react-toastify";

const ProductDetailsPage = (props) => {
  console.log(props);
  const { product } = props;
  const { productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const clickCheckoutHandler = () => {
    navigate("/checkout");
  };

  const addToCart = () => {
    try {
      props.addProductToCart(product);
      toast.success("You've added this product to cart.");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    try {
      if (productId && productId !== "") await fetchSingleProduct(productId);
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (!product) return null;

  const { productCode, price, image, title } = product;

  return (
    <div>
      <Header />
      <div className="product__container">
        <Container>
          <CardDescription
            productCode={productCode}
            productPrice={price}
            productDetails={title}
            src={image}
            className="product__description"
          />
          <div className="product__buttons-wrapper">
            <Button buttonTitle="Checkout" onClick={clickCheckoutHandler} />
            <Button buttonTitle="Add to Cart" onClick={addToCart} />
          </div>
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
})(ProductDetailsPage);