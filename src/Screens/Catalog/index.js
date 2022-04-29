import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Header";
import Footer from "../../Footer";
import Container from "../../components/Container";
import ProductGroup from "../../components/Sidebar/ProductGroup";

const Catalog = () => {
  return (
    <div className="app">
      <Link to="/catalog"></Link>
      <Header />
      <Container>
          {/* here should go component Catalog instead of ProductGroup, so make one! */}
        <ProductGroup />
      </Container>
      <Footer />
    </div>
  );
};

export default Catalog;
 