import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../Card";
import CardDescription from "../Card/CardDescription";
import ProductGroupTitle from "../ProductGroupTitle";
import blazer1 from "../../assets/img/blazer1.jpeg";
import blazer2 from "../../assets/img/blazer2.jpg";
import blazer3 from "../../assets/img/blazer3.jpeg";
import blazer4 from "../../assets/img/blazer4.png";
import Button from "../Button";

import { fetchAllProductsFromCatalog } from "../../Redux/Actions/Catalog";

const productList = [
  {
    id: 1,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 36,
    currency: "BAM",
    src: blazer1,
  },
  {
    id: 2,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 39,
    currency: "BAM",
    src: blazer2,
  },
  {
    id: 3,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 62,
    currency: "BAM",
    src: blazer3,
  },
  {
    id: 4,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 35,
    currency: "BAM",
    src: blazer4,
  },
  {
    id: 5,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 22,
    currency: "BAM",
    src: blazer2,
  },
  {
    id: 6,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 89,
    currency: "BAM",
    src: blazer3,
  },
  {
    id: 7,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 70,
    currency: "BAM",
    src: blazer1,
  },
  {
    id: 8,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 59,
    currency: "BAM",
    src: blazer3,
  },
  {
    id: 9,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 74,
    currency: "BAM",
    src: blazer4,
  },
  {
    id: 10,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 52,
    currency: "BAM",
    src: blazer3,
  },
  {
    id: 11,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 25,
    currency: "BAM",
    src: blazer4,
  },
  {
    id: 12,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 15,
    currency: "BAM",
    src: blazer2,
  },
  {
    id: 13,
    productDetails: "Nina strappy tie leg heeled sandals in beige",
    productCode: "773457",
    productPrice: 9,
    currency: "BAM",
    src: blazer1,
  },
];

const Clothing = (props) => {
  const { onClick } = props;

  const navigate = useNavigate();

  useEffect(async () => {
    try {
      await props.getProducts();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const productClickHandler = (product) => {
    const { id } = product;

    navigate(`/catalog/clothing/product-details/${id}`);
  };

  const sortProductsByPrice = () => {
    const productsCopy = [...props?.products];

    console.log(productsCopy);
    productsCopy.sort((a, b) => {
      return a.price - b.price;
    });

    console.log(productsCopy);

    // props.updateProducts(productsCopy);
  };

  return (
    <div className="catalog__clothing">
      <ProductGroupTitle title="Catalog" />
      <Button
        buttonTitle="Sort products by price"
        className="catalog__clothing__sort-button"
        onClick={sortProductsByPrice}
      />
      <div className="catalog__product-list">
        {props.products?.map((product) => {
          const { productCode, title, price, image, id } = product;
          return (
            <Card key={id}>
              <CardDescription
                productCode={productCode}
                productPrice={price}
                productDetails={title}
                onClick={() => {
                  productClickHandler(product);
                }}
                src={image}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return { products: store.catalog.products };
};

export default connect(mapStateToProps, {
  getProducts: fetchAllProductsFromCatalog,
})(Clothing);
