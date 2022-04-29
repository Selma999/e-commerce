import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Header";
import Footer from "../../Footer";
import Container from "../../components/Container"; 
import Login from "../../components/Login";

const LoginPage = () => {
  return (
    <div className="app">
      <Link to="/login"></Link>  
      <Header />
      <Container>
        {/* here should go the real form for Login/Create account instead of Login component */}
        <Login />
      </Container>
      <Footer />
    </div> 
  );
}; 

export default LoginPage;
