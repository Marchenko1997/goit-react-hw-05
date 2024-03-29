import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import css from "./AppBar.module.css";

const AppBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div>
      <header>
        <p className={css.logo}>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoSearch Movies
        </p>
        <nav className={css.nav}>
          <NavLink
            to="/"
            activeClassName={css.active}
            className={buildLinkClass}
          >
                Home
          </NavLink>
          <NavLink
            to="/movies"
            activeClassName={css.active}
            className={buildLinkClass}
          >
                Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AppBar;
