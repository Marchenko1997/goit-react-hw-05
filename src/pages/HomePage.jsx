import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../movies-api";
import MovieList from "../components/MovieList";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        console.log(data); 
        setMovies(data.results);
        setIsLoading(false); 
      })
      .catch((error) => console.error(error));
  }, []);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Trending today</h1>
   
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
