import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../Card";
import CardDescription from "../Card/CardDescription";
import ProductGroupTitle from "../ProductGroupTitle";
import Button from "../Button";

import { fetchAllProductsFromCatalog } from "../../Redux/Actions/Catalog";
import {
  // fetching actions
  getCategoryElectronics,
  getCategoryJewelery,
  getAllProducts,

  // updating actions (redux-only)
  updateElectronicsProducts,
  updateJeweleryProducts,
  updateAllProducts,
} from "../../Redux/Actions/Category";
import Loader from "../Loader";

const Categories = (props) => {
  const { label } = useParams();
  const [inProgress, setInProgress] = useState(false);

  let list = [];

  if (label === "electronics") {
    list = props.electronics;
  } else if (label === "jewelery") {
    list = props.jewelery;
  } else {
    list = props.allProducts;
  }

  const navigate = useNavigate();

  useEffect(async () => {
    if (inProgress) return;
    try {
      setInProgress(true);
      
      if (label === "electronics") {
        await props.getCategoryElectronics();
      } else if (label === "jewelery") {
        await props.getCategoryJewelery();
      } else {
        await props.getAllProducts();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setInProgress(false);
    }
  }, [label]);

  const productClickHandler = (product) => {
    const { id } = product;

    navigate(`/catalog/clothing/product-details/${id}`);
  };

  const sortProductsByPrice = () => {
    const productsCopy = [...list];

    productsCopy.sort((a, b) => {
      return a.price - b.price;
    });

    if (label === "electronics") {
      props.updateElectronicsProducts(productsCopy);
    } else if (label === "jewelery") {
      props.updateJeweleryProducts(productsCopy);
    } else {
      props.updateAllProducts(productsCopy);
    }
  };

  return (
    <div className="catalog__clothing">
      <ProductGroupTitle title={label} />
      <Button
        buttonTitle="Sort products by price"
        className="catalog__clothing__sort-button"
        onClick={sortProductsByPrice}
      />
      <div className="catalog__product-list">
        {inProgress && <Loader />}
        {list?.map((product) => {
          const { productCode, title, price, image, id } = product;
          return (
            <Card key={id}>
              <CardDescription
                product={product}
                productCode={productCode}
                productPrice={price}
                productDetails={title}
                onClick={() => {
                  productClickHandler(product);
                }}
                src={image}
                addChekoutButtons
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    electronics: store.categories.electronics,
    jewelery: store.categories.jewelery,
    allProducts: store.categories.allProducts,
  };
};

export default connect(mapStateToProps, {
  getProducts: fetchAllProductsFromCatalog,
  getCategoryElectronics,
  getCategoryJewelery,
  getAllProducts,

  updateElectronicsProducts,
  updateJeweleryProducts,
  updateAllProducts,
})(Categories);
