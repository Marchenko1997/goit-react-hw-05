
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../movies-api";
import { useParams, NavLink, useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { BackLink } from "../components/BackLink/BackLink";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation(); 
  const backLinkHref = location.state?.from ?? localStorage.getItem('prevPage') ?? "/movies";

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

  const backLinkTo = {
    pathname: backLinkHref,
    search: `?query=${encodeURIComponent(movie.title)}` 
  };

  return (
    <div>
      <BackLink to={backLinkTo}>Go back</BackLink>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>User Score: {Math.round(movie.UseScore * 10)}%</p>

      <p>Genres: {movie.Genres.join(", ")}</p>

      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Additional information</p>
      <nav>
        <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        <NavLink to={`/movies/${movieId}/reviews`} >Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
