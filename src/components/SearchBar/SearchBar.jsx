import { useState } from 'react';
import PropTypes from 'prop-types'; 

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); 
    if (searchQuery.trim() === "") return;
    try {
      localStorage.removeItem('prevPage');
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
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired 
};

export default SearchBar;

