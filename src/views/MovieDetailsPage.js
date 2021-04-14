import React, { Component, Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
// import Cast from '../views/Cast';
// import Reviews from '../views/Reviews';
import { getMovieDetails } from '../services/movieApi';
import routes from '../routes';

const Cast = lazy(() =>
  import('../views/Cast' /* webpackChunkName: "cast-page" */),
);
const Reviews = lazy(() =>
  import('../views/Reviews' /* webpackChunkName: "reviews-page" */),
);

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    original_title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    id: null,
    genres: null,
    imgUrl: 'https://image.tmdb.org/t/p/w780/',
  };

  componentDidMount() {
    const id = Number(this.props.match.params.movieId);
    getMovieDetails({ id }).then(({ data }) => {
      this.setState({ ...data });
    });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      poster_path,
      original_title,
      release_date,
      vote_average,
      overview,
      genres,
      imgUrl,
    } = this.state;

    const { url, path } = this.props.match;
    const { state } = this.props.location;

    return (
      <>
        {original_title !== null && (
          <div>
            <button type="button" onClick={this.handleGoBack}>
              Go Back
            </button>
            <div className="MovieDetailsWrapper">
              <img
                src={imgUrl + poster_path}
                alt={original_title}
                className="MovieDetailsImg"
              />
              <div className="MovieDetails">
                <h2>
                  {original_title} ({release_date})
                </h2>
                <p>Vote average: {vote_average}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>
                  {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="AddInfoWrapper">
              <h3>Additional information</h3>
              <div className="DetailsNavLinksWrapper">
                <NavLink
                  to={{
                    pathname: `${url}/cast`,
                    state: { ...state },
                  }}
                  className="nav-link"
                  activeClassName="active"
                >
                  Cast
                </NavLink>
                <NavLink
                  to={{
                    pathname: `${url}/reviews`,
                    state: { ...state },
                  }}
                  className="nav-link"
                  activeClassName="active"
                >
                  Reviews
                </NavLink>
              </div>
            </div>
            <Suspense fallback={<h2>Loading...</h2>}>
              <Switch>
                <Route path={`${path}/cast`} component={Cast} />
                <Route path={`${path}/reviews`} component={Reviews} />
              </Switch>
            </Suspense>
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
