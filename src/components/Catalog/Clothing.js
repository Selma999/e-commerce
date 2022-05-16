import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CardWrapper from "../CardWrapper";
import Card from "../CardWrapper/Card";
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
          const { productCode, price, image, id } = product;
          return (
            <CardWrapper key={id}>
              <Card
                product={product}
                productCode={productCode}
                productPrice={price}
                onClick={() => {
                  productClickHandler(product);
                }}
                src={image}
                addChekoutButtons
              />
            </CardWrapper>
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
