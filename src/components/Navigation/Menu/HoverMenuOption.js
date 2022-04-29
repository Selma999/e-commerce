import React from "react";

const HoverMenuOption = ({ menuOptionLabel, href }) => {
  return (
    <div className="hover-menu__option">
      <a href={href}>
        <span>{menuOptionLabel}</span>
      </a>
    </div>
  );
};

export default HoverMenuOption;
