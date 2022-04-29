import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Header";
import Footer from "../../Footer";
import Container from "../../components/Container";
import Clothing from "../../components/Catalog/Clothing";

const ClothingPage = () => {
  return (   
    <div className="app"> 
      <Link to="/catalog/clothing"></Link>
      <Header />
      <Container>
        <Clothing />
      </Container>
      <Footer />
    </div>
  );
};

export default ClothingPage;
