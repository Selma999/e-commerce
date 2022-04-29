import React from "react";
import classNames from "classnames";

const ProductGroup = ({ productType, className, onClick }) => {
  return (
    <div onClick={onClick} className={classNames("sidebar-catalog__product-type", { className })}>
      <p>{productType}</p>
    </div>
  );
};

export default ProductGroup;
