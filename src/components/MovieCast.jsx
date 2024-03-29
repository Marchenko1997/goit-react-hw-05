import { useEffect, useState } from "react";
import { serviceMovieCredits } from "../../movies-api";
import PropTypes from 'prop-types';

const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const creditsData = await serviceMovieCredits(movieId);
        if (creditsData && creditsData.cast) {
          const castData = creditsData.cast.map(actor => ({
            id: actor.id,
            name: actor.name,
            character: actor.character,
            profile_path: actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : null
          }));
          setCast(castData);
        } else {
          console.error("No cast data available");
        }
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path && (
              <img src={actor.profile_path} alt={actor.name} />
            )}
            <p>{actor.name} as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

MovieCast.propTypes = {
  movieId: PropTypes.number.isRequired
};

export default MovieCast;
