import { useEffect, useState } from "react";
import { serviceMovieReviews } from "../../movies-api";
import PropTypes from 'prop-types';

const MovieReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await serviceMovieReviews(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      }
    };

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
    </div>
  );
};

MovieReviews.propTypes = {
  movieId: PropTypes.number.isRequired
};

export default MovieReviews;
