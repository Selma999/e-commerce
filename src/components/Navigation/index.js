import React, { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import Burger from "./Burger";
import Menu from "./Menu";

import logo from "../../assets/img/coolblue.svg";

function Navigation() {
  const [menuOpened, setMenuOpened] = useState(false);

  const navigate = useNavigate();

  const handleMenuToggler = (e) => {
    e.preventDefault();
    setMenuOpened(!menuOpened);
  };

  const navigateToHomepage = () => {
    navigate("/");
  };

  return (
    <div className="navigation">
      <div className="navigation__burger">
        <Burger
          onClick={handleMenuToggler}
          className={classNames("burger", { menuOpened: menuOpened })}
        />
      </div>

      <div onClick={navigateToHomepage} className="navigation__logo">
        <img src={logo} width="40" height="40" />
      </div>
      <Menu menuOpened={menuOpened} />
    </div>
  );
}

export default Navigation;
