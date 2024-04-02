// MovieCast.jsx
import { useEffect, useState } from "react";
import { serviceMovieCredits } from "../../../movies-api";
import css from "./MovieCast.module.css";
import { Loader } from "../Loader/Loader";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams(); 

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }

    fetchMovieCredits();
  }, [movieId]);
  return (
    <div className={css.container}>
       {loading && <Loader />}
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.castItem}>
            {actor.profile_path && (
              <img
                className={css.castImage}
                src={actor.profile_path}
                alt={actor.name}
                width={200}
              />
            )}
            <p className={css.actorName}>{actor.name}</p>
            <p className={css.character}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>

      {error && <span className={css.error}>Error! Please, reload this page!</span>}
    </div>
  );
};

export default MovieCast;