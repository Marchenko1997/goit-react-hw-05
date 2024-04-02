
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../../movies-api';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css'
function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.removeItem('searchResults');

    getTrendingMovies()
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (isLoading) {
    return (
      <div className={css.loadingContainer}>
        <div className={css.loading}>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <div className={css.movieContainer}>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default HomePage;