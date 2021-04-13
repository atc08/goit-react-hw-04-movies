import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <div className={s.navigationLinksWrapper}>
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to={routes.movies}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </div>
      <p className={s.navigation__title}>MovieFinder</p>
    </nav>
  );
};

export default Navigation;
