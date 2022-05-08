import React from "react";
import Card from "../Card";
import CardDescription from "../Card/CardDescription";
import ProductGroupTitle from "../ProductGroupTitle";

const productList = [
  {
    id: 1,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: "35 BAM",
    src: "./assets/img/blazer1.jpeg",
  },
  {
    id: 2,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: "35 BAM",
    src: "./assets/img/blazer2.jpg",
  },
  {
    id: 3,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: "35 BAM",
    src: "./assets/img/blazer3.jpeg",
  },
  {
    id: 4,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: "35 BAM",
    src: "./assets/img/blazer4.png",
  },
];

const Shoes = () => {
  return (
    <div className="catalog__shoes">
      <ProductGroupTitle title="Shoes" />
      <Card>
        {productList.map((product) => {
          const { productDetails, productCode, productPrice, src } = product;
          return (
            <CardDescription
              product={product}
              productDetails={productDetails}
              productCode={productCode}
              productPrice={productPrice}
              src={src}
            />
          );
        })}
      </Card>
      <Card>
        {productList.map((product) => {
          const { productDetails, productCode, productPrice, src } = product;
          return (
            <CardDescription
              product={product}
              productDetails={productDetails}
              productCode={productCode}
              productPrice={productPrice}
              src={src}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Shoes;
