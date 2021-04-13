import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';
import s from './MovieList.module.css';

const MovieList = ({ movies, imgUrl, location }) => {
  return (
    <ul className={s.MovieList}>
      {movies.map(movie => (
        <li key={movie.id} className={s.MovieListItem}>
          <Link
            to={{
              pathname: `${routes.movies}/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            <img
              src={imgUrl + movie.backdrop_path}
              alt={movie.original_title}
              className={s.MovieListItemImg}
            />
            <p className={s.MovieListItemInfo}>
              {movie.original_title} {movie.release_date}
              {movie.original_name} {movie.first_air_date}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
