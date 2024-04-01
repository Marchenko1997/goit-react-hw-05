
import { useEffect, useState, useCallback } from 'react';
import { searchMovies } from '../../movies-api';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar/SearchBar';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    localStorage.removeItem('searchResults');
  }, []);

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('searchResults'));
    if (storedResults) {
      setSearchResults(storedResults);
    }
  }, []);

  const handleSearch = useCallback(async (query) => {
    try {
      localStorage.removeItem('searchResults');
      const data = await searchMovies(query);
      setSearchResults(data.results);
      localStorage.setItem('searchResults', JSON.stringify(data.results));

    
      const newSearch = `?query=${encodeURIComponent(query)}`;
      window.history.pushState(null, '', newSearch);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      handleSearch(searchQuery);
    }
  }, [searchQuery, handleSearch]);

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <MovieList movies={searchResults} />
    </div>
  );
};

export default MoviesPage;

