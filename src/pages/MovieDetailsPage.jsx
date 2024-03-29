import { useEffect, useState } from "react";
import { getMovieDetails } from "../../movies-api";
import { useParams, Link } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>User Score: {Math.round(movie.UseScore * 10)}%</p>

      <p>Genres: {movie.Genres.join(", ")}</p>

      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Additional information</p>
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
    </div>
  );
};

export default MovieDetailsPage;
