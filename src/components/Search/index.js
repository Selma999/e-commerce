import React, { useState } from "react";

function Search() {
  const [searchClicked, setSearchClicked] = useState(false);
  const clickSearchHandler = () => {
    setSearchClicked(true); 
  };

  const closeSearchHandler = () => { 
    setSearchClicked(false);
  };
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
          <input type="text" placeholder="Find products" />
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#4E7187"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
