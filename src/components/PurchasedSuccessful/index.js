import React from "react";
import { connect } from "react-redux";
import Container from "../Container";
import Card from "../CardWrapper/Card";

const PurchasedSuccessful = (props) => {
  return (
    <Container>
      <div className="purchased">
        <p>You have successfully made a purchase!</p>
        <p>Product(s) you purchased:</p>
        <div>
          {props.products?.map((product) => {
            const { title, price, image } = product;
            return (
              <div key={product.id} className="product">
                <Card
                  product={product}
                  productDetails={title}
                  productPrice={price}
                  src={image}
                  className="product__details"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (store) => {
  return {
    products: store.cart.products,
  };
};

export default connect(mapStateToProps, {})(PurchasedSuccessful);
