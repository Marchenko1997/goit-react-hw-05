import { useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import css from './Searchbar.module.css'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); 
    if (searchQuery.trim() === "") {
      toast.error('Please enter a search term!');
      return;
    }
    
    try {
      await onSearch(searchQuery); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className={css.form}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={css.input}
        />
        <button type="submit" className={css.button}>Search</button>
      </form>
      <Toaster />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired 
};

export default SearchBar;
