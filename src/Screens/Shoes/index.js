import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Header";
import Footer from "../../Footer";
import Container from "../../components/Container";
import Shoes from "../../components/Catalog/Shoes";

const ShoesPage = () => {
  return (
    <div className="app">
      <Link to="/catalog/shoes"></Link>
      <Header />
      <Container>
        <Shoes />
      </Container>
      <Footer />
    </div>
  );
};

export default ShoesPage;
 