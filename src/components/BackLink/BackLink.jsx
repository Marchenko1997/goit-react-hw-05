// BackLink.jsx
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to.pathname + to.search} className={css.link}>
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
  ]).isRequired,
  children: PropTypes.node.isRequired 
};