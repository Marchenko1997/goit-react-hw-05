import { useEffect, useState, useCallback } from 'react';
import { searchMovies } from '../../movies-api';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = useCallback(async (query) => {
    try {
      const data = await searchMovies(query);
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!searchParams.get('query')) return;
    handleSearch(searchParams.get('query'));
  }, [searchParams, handleSearch]);

  const onSubmit = (query) => {
    setSearchParams({ query });
  };

  return (
    <div>
      <SearchBar onSearch={onSubmit} />
      <MovieList movies={searchResults} />
    </div>
  );
};

export default MoviesPage;
