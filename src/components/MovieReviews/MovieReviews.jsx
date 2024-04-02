// MovieReviews.jsx
import { useEffect, useState } from "react";
import { serviceMovieReviews } from "../../../movies-api";
import css from './MovieReviews.module.css'
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
    <div className={css.container}>
      <h2>Reviews</h2>
      <ul className={css.reviewList}>
        {reviews.map((review) => (
          <li key={review.id} className={css.reviewItem}> 
            <h3 className={css.authorName}>{review.author}</h3> 
            <p className={css.reviewContent}>{review.content}</p> 
          </li>
        ))}
      </ul>

      {error && <span>Error! Please, reload this page!</span>}
    </div>
  );
};

export default MovieReviews;