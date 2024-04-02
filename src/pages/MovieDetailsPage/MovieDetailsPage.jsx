import { useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../../../movies-api";
import { useParams, NavLink, useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { BackLink } from "../../components/BackLink/BackLink";
import css from './MovieDetailsPage.module.css';


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation(); 
  const backLinkHref = useRef(location.state ?? "/"); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;
  return (
    <div className={css.container}>
      <BackLink to={backLinkHref.current} className={css.backLink}>
       
        Go back
      </BackLink>
      <h1 className={css.movieTitle}>{movie.title}</h1>
      <p className={css.movieOverview}>{movie.overview}</p>
      <p className={css.userScore}>User Score: {Math.round(movie.UseScore * 10)}%</p>
      <p className={css.genres}>Genres: {movie.Genres.join(", ")}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p className={css.additionalInfo}>Additional information</p>
      <nav className={css.navLinks}>
        <NavLink to={`/movies/${movieId}/cast`} className={css.navLink}>Cast</NavLink>
        <NavLink to={`/movies/${movieId}/reviews`} className={css.navLink}>Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;