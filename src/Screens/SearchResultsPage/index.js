import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SearchResults from "../../components/Search/SearchResults";
import Container from "../../components/Container";
import Footer from "../../Footer";
import Header from "../../Header";

import { saveSearchResults } from "../../Redux/Actions/Search";

const SearchResultsPage = () => {
  return (
    <div className="app">
      <Link to="/search-results"></Link>
      <Header />
      <Container>
        <SearchResults />
      </Container>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
