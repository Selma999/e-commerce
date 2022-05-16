import React from "react";
import { connect } from "react-redux";

import Card from "../CardWrapper/Card";

import { saveSearchResults } from "../../Redux/Actions/Search";

function SearchResults(props) {
  return (
    <div className="search__results">
      <p>Search Results:</p>
      {props.results.map((product) => {
        const { title, price, image } = product;
        return (
          <div key={product.id} className="product">
            <Card
              product={product}
              productDetails={title}
              productPrice={price}
              src={image}
              className="product__details"
            />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    results: store.search.results,
  };
};

export default connect(mapStateToProps, {
  saveSearchResults,
})(SearchResults);
