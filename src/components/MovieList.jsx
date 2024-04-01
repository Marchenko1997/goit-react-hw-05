
import { useState } from 'react';
import PropTypes from 'prop-types'; 
import { NavLink } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const [savedSearchResults] = useState(JSON.parse(localStorage.getItem('searchResults')));
  const displayMovies = savedSearchResults ? savedSearchResults : movies;

  const handleMovieClick = () => {
    localStorage.setItem('prevPage', window.location.pathname); 
  };

  return (
    <ul>
      {displayMovies.map((movie) => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} onClick={() => handleMovieClick(movie)}>
            <h2>{movie.title}</h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string, 
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
