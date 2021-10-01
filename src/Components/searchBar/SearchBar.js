import React from "react";
import PropTypes from "prop-types";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSearch = evt => {
    evt.preventDefault();
    onSubmit(evt.target.elements.searchImage.value.toLowerCase());
  };

  return (
    <header className={style.Searchbar}>
      <form onSubmit={handleSearch} className={style.SearchForm}>
        <button type="submit" className={style.SearchFormbutton}>
          <span className={style.SearchFormbuttonlabel}>Search</span>
        </button>
        <input
          className={style.SearchForminput}
          name="searchImage"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
