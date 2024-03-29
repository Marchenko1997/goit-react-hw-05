import axios from "axios";

const API_KEY = "7d98865b8cb3970d6d955a4c6f6a56e7";
const BASE_URL = "https://api.themoviedb.org/3/";

export async function getTrendingMovies() {
    try {
      const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      throw error;
    }
  }
  

export async function searchMovies(query) {
    try{
    const response = await axios.get('search/movie',{
        baseURL: BASE_URL,
        params: {
            query:query,
            include_adult: false,
            language: 'en-US',
            page:1
        },
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }

    });
    return response.data;

    } catch(error) {
console.error("Error searching movies", error);
throw error;
    }
}

export async function getMovieDetails(movieId){
    try{
const response = await axios.get(`movie/${movieId}api_key=${API_KEY}&language=en-US`,
{baseURL: BASE_URL,
    headers: {
        Authorization:`Bearer ${API_KEY}`
    }
});
return response.data;
    } catch(error){
        console.error("Error fetching movie details",error);
        throw error;
    }

}