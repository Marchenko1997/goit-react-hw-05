import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={css.notFoundContainer}>
      <h1 className={css.notFoundTitle}>404 - Page Not Found</h1>
      <p className={css.notFoundText}>The page you are looking for does not exist.</p>
      <Link to="/" className={css.notFoundLink}>Go back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
