import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); 
    if (searchQuery.trim() === "") return;
    try {
      await onSearch(searchQuery); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={css.input}
      />
      <button type="submit" className={css.button}>Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired 
};

export default SearchBar;
