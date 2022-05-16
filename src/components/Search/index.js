import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAllProducts } from "../../Redux/Actions/Category";
import { saveSearchResults } from "../../Redux/Actions/Search";

function objToString(obj) {
  const values = Object.values(obj);

  let str = "";

  for (const val of values) {
    if (typeof val === "object") {
      str += objToString(val);
    } else {
      str += val;
    }
  }

  return str.toLowerCase();
}

function Search(props) {
  const [searchClicked, setSearchClicked] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const navigate = useNavigate();
  const clickSearchHandler = () => {
    setSearchClicked(true);
  };

  const closeSearchHandler = () => {
    setSearchClicked(false);
  };

  useEffect(async () => {
    if (inProgress) return;
    try {
      setInProgress(true);

      await props.getAllProducts();
    } catch (err) {
      console.log(err);
    } finally {
      setInProgress(false);
    }
  }, []);

  const getInputValue = (e) => {
    const inputValue = e.target.value?.toString().toLowerCase();

    const searchArr = props.allProducts?.map((product) => {
      return {
        id: product.id,
        string: objToString(product),
      };
    });

    const searchResults = searchArr
      .filter(({ string }) => string.includes(inputValue))
      .map(({ id }) => props.allProducts.find((product) => product.id == id));

    props.saveSearchResults(searchResults);
  };

  function onKeyPress(e) {
    if (e.key === "Enter") {
      navigate("/search-results");
    }
  }

  return (
    <div
      className={
        !searchClicked
          ? "header__search-wrapper"
          : "header__search-wrapper-clicked"
      }
    >
      <div
        className={
          !searchClicked
            ? "header__search__icon"
            : "header__search__icon-closed"
        }
        onClick={clickSearchHandler}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#626F8B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.0004 21.0004L16.6504 16.6504"
            stroke="#626F8B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {searchClicked && (
        <div className="header__search__input">
          <input
            type="text"
            placeholder="Find products"
            onChange={getInputValue}
            onKeyPress={onKeyPress}
          />
          <div onClick={closeSearchHandler}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#4E7187"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#4E7187"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    allProducts: store.categories.allProducts,
  };
};

export default connect(mapStateToProps, {
  getAllProducts,
  saveSearchResults,
})(Search);
