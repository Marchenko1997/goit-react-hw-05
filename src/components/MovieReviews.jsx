// MovieReviews.jsx
import { useEffect, useState } from "react";
import { serviceMovieReviews } from "../../movies-api";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviewsData = await serviceMovieReviews(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        setError(true);
        console.error("Error fetching movie reviews:", error);
      }
    }

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      
      {error && <span>Error! Please, reload this page!</span>}
    </div>
  );
};

MovieReviews.propTypes = {
  movieId: PropTypes.string.isRequired 
};

export default MovieReviews;
