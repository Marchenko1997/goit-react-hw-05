import axios from "axios";

const API_KEY = "7d98865b8cb3970d6d955a4c6f6a56e7";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function getTrendingMovies() {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
}

export async function searchMovies(query, page = 1) {
  try {
    const params = new URLSearchParams({
      api_key: API_KEY,
      query: query,
      page: page,
    });
    const response = await axios.get(`/search/movie?${params}`);
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
}


export async function getMovieDetails(movieId) {
  try {
    const movieResponse = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);

    const movieData = movieResponse.data;
    

    const { vote_average: UseScore, genres } = movieData;

    return {
      ...movieData,
      UseScore,
      Genres: genres.map(genre => genre.name),
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
}

export async function serviceMovieCredits(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`, {
      params: {
        language: 'en-US',
        api_key: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    throw error;
  }
}

export async function serviceMovieReviews(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
}
