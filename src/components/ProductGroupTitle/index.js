import React from "react";
import classNames from "classnames";

const ProductGroupTitle = ({ className, title }) => {
  return (
    <div className={classNames("product-group__title", { className })}>
      <h2>{title}</h2>
    </div>
  );
};

export default ProductGroupTitle;
