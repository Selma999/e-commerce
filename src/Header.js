import React from "react";
import { useNavigate } from "react-router-dom";

import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Cart from "./assets/img/cart.png";

function Header() {
  const navigate = useNavigate();
  const isLogged = false;

  const clickedCartHandler = () => {
    navigate("/cart");
  };

  return (
    <div className="header">
      <div className="header__first-group">
        <Navigation responsiveMode={false} />
      </div>
      <div className="header__second-group">
        <Search />
        <div className="header__icon-cart" onClick={clickedCartHandler}>
          <img src={Cart} alt="" />
        </div>
        {!isLogged && <Login />}
      </div>
    </div>
  );
}

export default Header;
