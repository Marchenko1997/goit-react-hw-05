import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import css from './AppBar.module.css';

const buildLinkClass = ({isActive}) => {
  return clsx(css.link, isActive && css.active);
};

const AppBar = () => {
  return (
   <header>
          <p className={css.logo}>
        <span role="img" aria-label="computer icon">
          💻
        </span>{' '}
        GoSearch Movies
      </p>
      <nav className={css.nav}>
        <NavLink to='/' className={buildLinkClass}>Home </NavLink>
        <NavLink to='/movies' className={buildLinkClass}> Movies</NavLink>
      </nav>

   </header>
  )
}

export { AppBar };
