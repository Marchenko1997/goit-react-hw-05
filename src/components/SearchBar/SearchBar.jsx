import{ useState } from 'react';
import PropTypes from 'prop-types'; 

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    if (searchQuery.trim() === "") return;
    try {
      onSearch(searchQuery); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};


SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired 
};

export default SearchBar;
