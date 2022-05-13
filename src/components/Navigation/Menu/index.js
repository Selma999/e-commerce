import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";

import MenuOption from "./MenuOption";

import { getCategories } from "../../../Redux/Actions/Categories";

function Menu(props) {
  const { menuOpened } = props;

  const navigate = useNavigate();
  const navigateToHomepage = () => {
    navigate("/");
  };

  useEffect(async () => {
    try {
      await props.getCategories();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <div
        className={classNames("menu__responsive", { menuOpened: menuOpened })}
      >
        {menuOpened && (
          <>
            {props.categories.map((category) => {
              return <MenuOption key={category} label={category} />;
            })}
            <div
              onClick={navigateToHomepage}
              className="navigation__logo-menu-opened"
            >
              <p>Homepage</p>
            </div>
          </>
        )}
      </div>
      <div className={classNames("menu__desktop", { menuOpened: menuOpened })}>
        {props.categories.map((category) => {
          return <MenuOption key={category} label={category} />;
        })}
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return { categories: store.categories.categories };
};

export default connect(mapStateToProps, {
  getCategories,
})(Menu);
