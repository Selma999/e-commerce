import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Header";
import Footer from "../../Footer";
import Container from "../../components/Container";
import PurchasedSuccessful from "../../components/PurchasedSuccessful";

const PurchasedPage = () => {
  return (
    <div className="app">
      <Link to="/cart/purchased"></Link>
      <Header />
      <Container>
        <PurchasedSuccessful />
      </Container>
      <Footer />
    </div>
  );
};

export default PurchasedPage;
