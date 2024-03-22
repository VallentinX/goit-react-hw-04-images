import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";

import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="form"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search images..."
      />
      <button type="submit" className={styles.SearchButton}>
        <FaSearch className={styles.SearchIcon} />
      </button>
    </form>
  );
};

export default SearchBar;
