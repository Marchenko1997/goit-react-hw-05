import { HiArrowLeft } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  const location = useLocation();
  const prevPage = location.state?.from || "/movies";

  return (
    <Link to={to.pathname + to.search || prevPage} className={css.link}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }),
  ]),
  children: PropTypes.node.isRequired 
};
