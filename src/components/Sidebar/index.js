import React from "react";
import classNames from "classnames";

import ProductGroup from "./ProductGroup";
import { useNavigate } from "react-router-dom";

function Sidebar({ className }) {
  const navigate = useNavigate();

  const redirectToProduct = () => {
    navigate("/");
  };

  const shoes = [
    {
      id: 1,
      productType: "Heels",
      onClick: { redirectToProduct },
    },
    {
      id: 2,
      productType: "Trainers",
      onClick: { redirectToProduct },
    },
    {
      id: 3,
      productType: "Sandals",
      onClick: { redirectToProduct },
    },
    {
      id: 4,
      productType: "Flat shoes",
      onClick: { redirectToProduct },
    },
  ];

  const clothing = [
    {
      id: 5,
      productType: "Trousers",
      onClick: { redirectToProduct },
    },
    {
      id: 6,
      productType: "Jeans",
      onClick: { redirectToProduct },
    },
    {
      id: 7,
      productType: "Leggings",
      onClick: { redirectToProduct },
    },
    {
      id: 8,
      productType: "Skirts",
      onClick: { redirectToProduct },
    },
    {
      id: 9,
      productType: "Blazers",
      onClick: { redirectToProduct },
    },
    {
      id: 10,
      productType: "Suits",
      onClick: { redirectToProduct },
    },
    {
      id: 11,
      productType: "Jumpsuits",
      onClick: { redirectToProduct },
    },
    {
      id: 12,
      productType: "Skirts",
      onClick: { redirectToProduct },
    },
  ];
  return (
    <div className="sidebar-catalog">
      <div className={classNames("sidebar-catalog__group", { className })}>
        <p className="sidebar-catalog__group__title">Shoes</p>
        <div className="sidebar-catalog__group__wrapper">
          {shoes.map(({ productType, onClick }) => {
            return (
              <ProductGroup
                key={shoes.id}
                productType={productType}
                onClick={onClick}
              />
            );
          })}
        </div>
      </div>
      <div className={classNames("sidebar-catalog__group", { className })}>
        <p className="sidebar-catalog__group__title">Clothing</p>
        <div className="sidebar-catalog__group__wrapper">
          {clothing.map(({ productType, onClick }) => {
            return (
              <ProductGroup
                key={clothing.id}
                groupType="Clothing"
                productType={productType}
                onClick={onClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
