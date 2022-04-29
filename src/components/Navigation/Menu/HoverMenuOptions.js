import React from "react";
import HoverMenuOption from "./HoverMenuOption";

const HoverMenuOptions = () => {
  const hoverMenuOptions = [
    {
      id: 1,
      menuOptionLabel: "Shoes",
    },
    { id: 2, menuOptionLabel: "High Heels" },
    { id: 3, menuOptionLabel: "Bags" },
    { id: 4, menuOptionLabel: "Skirts" },
    { id: 5, menuOptionLabel: "Pants/Jeans" },
    { id: 6, menuOptionLabel: "Shirts" },
    { id: 7, menuOptionLabel: "Blazers/Jackets" },
  ];
  return (
    <div className="hover-menu__options">
      {hoverMenuOptions.map(({ menuOptionLabel }) => {
        return (
          <HoverMenuOption
            key={hoverMenuOptions.id}
            menuOptionLabel={menuOptionLabel}
          />
        );
      })}
    </div>
  );
};

export default HoverMenuOptions;
