import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MenuOption = (menuOption) => {
  const { className, onMouseEnter, onMouseLeave, label } = menuOption;

  const navigate = useNavigate();

  const clickHandler = useCallback(() => {
    navigate(`/catalog/categories/${label}`);
  }, []);

  return (
    <div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={clickHandler}
    >
      {label}
    </div>
  );
};

export default MenuOption;
