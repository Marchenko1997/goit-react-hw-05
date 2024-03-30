// MoviesPage.jsx
import  { useState } from 'react';
import { searchMovies } from "../../movies-api";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const data = await searchMovies(query);
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={searchResults} />
    </div>
  );
};

export default MoviesPage;
