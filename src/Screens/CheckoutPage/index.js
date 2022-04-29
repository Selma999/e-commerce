import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Header";
import Footer from "../../Footer";
import Container from "../../components/Container";
import Checkout from "../../components/Checkout";

const CartPage = () => {
  return (
    <div className="app">
      <Link to="/checkout"></Link>
      <Header />
      <Container>
        <Checkout />
      </Container>
      <Footer />
    </div>
  );
};

export default CartPage;
