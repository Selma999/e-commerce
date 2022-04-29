import classNames from "classnames";
import React from "react";

const CardDescription = ({
  className,
  productDetails,
  productPrice,
  productCode,
  onClick,
  src,
}) => {
  return (
    <div className={classNames("card__description", className)}>
      <div className={classNames("card__img", className)}>
        <img src={src} alt="" width={200} onClick={onClick} />
      </div>
      <div>
        <div className={classNames("card__product__details", className)}>
          {productDetails}
        </div>
        <div className={classNames("card__product__code", className)}>
          {productCode}
        </div>
        <div className={classNames("card__product__price", className)}>
          {productPrice} $
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
