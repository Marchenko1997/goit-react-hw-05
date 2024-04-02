import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../../movies-api';
import MovieList from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';
import css from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
       
      }finally {
        setLoading(false);
      }
    }


    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <h1 className={css.title}>Trending today</h1>
      <div className={css.movieContainer}>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default HomePage;
