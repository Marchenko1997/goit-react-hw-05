import  { useEffect, useState } from "react";
import { getMovieDetails } from "../../movies-api";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
 const fetchMovieDetails = async () => {
  try{
const movieDetails = await getMovieDetails(movieId);
setMovie(movieDetails)
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
      <p>Cast: {movie.Cast.join(", ")}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieDetailsPage;
