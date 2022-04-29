import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Header";
import Footer from "../../Footer";
import Container from "../../components/Container";
import HomePageContent from "../../components/HomePageContent";

const HomePage = () => {
  return (  
    <div className="app">  
      <Link to="/"></Link>
      <Header />
      <Container>
        <HomePageContent />
      </Container> 
      <Footer /> 
    </div>
  );
};

export default HomePage;
