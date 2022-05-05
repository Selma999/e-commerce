import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CardDescription from "../Card/CardDescription";
import Button from "../../components/Button";

function Cart(props) {
  const empty = props.products.length === 0;
  const navigate = useNavigate();
  const clickCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="product__container">
      <div className="cart">
        {empty && <div className="empty__cart">You're cart is empty</div>}
        {props.products.map((product) => {
          const { title, price, image } = product;
          return (
            <div key={product.id} className="product">
              <CardDescription
                productDetails={title}
                productPrice={price}
                src={image}
                className="product__details"
              />
            </div>
          );
        })}
      </div>
      {!empty && (
        <Button buttonTitle="Checkout" onClick={clickCheckoutHandler} />
      )}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    products: store.cart.products,
  };
};

export default connect(mapStateToProps, {})(Cart);
