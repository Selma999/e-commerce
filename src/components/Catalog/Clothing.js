import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../Card";
import CardDescription from "../Card/CardDescription";
import ProductGroupTitle from "../ProductGroupTitle";
import Button from "../Button";

import { fetchAllProductsFromCatalog } from "../../Redux/Actions/Catalog";

const Clothing = (props) => {
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
    productsCopy.sort((a, b) => {
      return a.price - b.price;
    });
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
