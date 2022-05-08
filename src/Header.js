import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Cart from "./assets/img/cart.png";

function Header(props) {
  const navigate = useNavigate();

  const clickedCartHandler = () => {
    navigate("/cart");
  };

  return (
    <div className="header">
      <div className="header__first-group">
        <Navigation />
      </div>
      <div className="header__second-group">
        <Search />
        <ul className="header__cart-wrapper-badge">
          <li
            data-badge={props.countProducts}
            className="header__icon-cart"
            onClick={clickedCartHandler}
          >
            <img src={Cart} alt="" />
          </li>
        </ul>
        {/* {!isLogged && <Login />} */}
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    countProducts: store.cart.totalCount,
  };
};

export default connect(mapStateToProps, {})(Header);
