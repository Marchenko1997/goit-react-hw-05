// MovieList.jsx
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink to={{ pathname: `/movies/${movie.id}`, state: { from: location.pathname } }}>
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

