// MovieCast.jsx
import { useEffect, useState } from "react";
import { serviceMovieCredits } from "../../movies-api";

import { useParams } from "react-router-dom";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams(); 

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        setError(false);
        const creditsData = await serviceMovieCredits(movieId);
      
        const castData = creditsData.cast.map(actor => ({
          id: actor.id,
          name: actor.name,
          character: actor.character,
          profile_path: actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : null
        }));
        setCast(castData.slice(0, 16));
      } catch (error) {
        setError(true);
      } 
    }

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path && (
              <img
                src={actor.profile_path}
                alt={actor.name}
                width={150}
              />
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
      
      {error && <span>Error! Please, reload this page!</span>}
    </div>
  );
};


export default MovieCast;
