import{ useState } from 'react';
import PropTypes from 'prop-types'; // Импортируем PropTypes

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    if (searchQuery.trim() === "") return;
    try {
      onSearch(searchQuery); // Передаем запрос на поиск родительскому компоненту
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

// Проп валидация
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired // Указываем, что onSearch должен быть функцией и обязателен
};

export default SearchBar;
