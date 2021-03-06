import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Card from "../CardWrapper/Card";

import { deleteProductFromCart } from "../../Redux/Actions/Product";

function Cart(props) {
  const empty = props.products.length === 0;

  const navigate = useNavigate();
  const clickCheckoutHandler = () => {
    navigate("/checkout");
  };
  const goToCatalog = () => {
    navigate("/catalog/clothing");
  };

  return (
    <div className="product__container">
      <div className="cart">
        {empty && (
          <>
            <div className="empty__cart">Your cart is empty</div>
            <Button onClick={goToCatalog} buttonTitle="Go to Catalog" />
          </>
        )}
        {props.products.map((product) => {
          const { title, price, image } = product;
          return (
            <div key={product.id} className="product">
              <Card
                product={product}
                productDetails={title}
                productPrice={price}
                src={image}
                className="product__details"
                showDeleteButton
              />
            </div>
          );
        })}
      </div>
      {!empty && (
        <>
          <Button buttonTitle="Checkout" onClick={clickCheckoutHandler} />
          {/* <Button buttonTitle={props.countProducts} /> */}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    products: store.cart.products,
    countProducts: store.cart.totalCount,
  };
};

export default connect(mapStateToProps, { deleteProductFromCart })(Cart);
