import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Header";
import Footer from "../../Footer";
import Cart from "../../components/Cart";
import Container from "../../components/Container";
import Product from "../../components/ProductGroupTitle/Product";

const CartPage = () => {
  return (
    <div className="app">
      <Link to="/cart"></Link>
      <Header />
      <Container>
        <Cart />
      </Container>
      <Footer />
    </div>
  );
};

export default CartPage;
