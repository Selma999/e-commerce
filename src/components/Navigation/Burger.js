import React from "react";

function Burger({ onClick, className }) {
  return (
    <div className={className} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Burger;
