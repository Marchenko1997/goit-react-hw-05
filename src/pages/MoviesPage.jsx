import { useEffect, useState, useCallback } from "react";
import { searchMovies } from "../../movies-api";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const handleSearch = useCallback(async (query) => {
    try {
      const data = await searchMovies(query);
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!query) return;
    handleSearch(query);
  }, [query, handleSearch]);

  const onSubmit = (query) => {
    setSearchParams({ query: query });
  };

  return (
    <div>
      <SearchBar onSearch={onSubmit} />
      <MovieList movies={searchResults} />
    </div>
  );
};

export default MoviesPage;
