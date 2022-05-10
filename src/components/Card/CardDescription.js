import React, { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";

import Button from "../Button";

import { addProductToCart } from "../../Redux/Actions/Product";
import Loader from "../Loader";

const CardDescription = (props) => {
  const {
    className,
    productDetails,
    productPrice,
    onClick,
    src,
    product,
    addChekoutButtons,
  } = props;

  const [inProgress, setInProgress] = useState(false);
  const navigate = useNavigate();
  const clickViewProduct = () => {
    navigate("/checkout");
  };

  const addToCart = () => {
    if (inProgress) return;
    try {
      props.addProductToCart(product);
      toast.success("You've added this product to cart.");
    } catch (err) {
      setInProgress(true);
      console.log(err);
    } finally {
      setInProgress(false);
    }
  };

  return (
    <>
      {inProgress && <Loader />}
      <div className={classNames("card__description", className)}>
        <div className={classNames("card__img", className)}>
          <p onClick={onClick}>View product</p>
          <img src={src} alt="" width={200} onClick={onClick} />
        </div>
        <div className="card__product-wrapper">
          <div className={classNames("card__product__details", className)}>
            {productDetails}
          </div>
          {/* <div className={classNames("card__product__code", className)}>
          {productCode}
        </div> */}
          <div className={classNames("card__product__price", className)}>
            {productPrice} $
          </div>
        </div>
        <div className="card__product-count">{props.productCount}</div>
        {addChekoutButtons && (
          <>
            <div className="product__buttons-wrapper">
              <Button
                className="product__button__add"
                buttonTitle="Add to Cart"
                onClick={addToCart}
              />
              <Button
                className="product__button__checkout"
                buttonTitle="Checkout"
                onClick={clickViewProduct}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (store, ownProps) => {
  const product = ownProps.product;
  const cartProducts = store.cart.products;

  let productCount = 0;

  for (const cartProduct of cartProducts) {
    if (product.id === cartProduct.id) {
      productCount = cartProduct.productCount;
    }
  }

  return {
    productCount,
  };
};

export default connect(mapStateToProps, {
  addProductToCart,
})(CardDescription);
