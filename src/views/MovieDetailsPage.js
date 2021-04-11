import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';
import { getMovieDetails } from '../services/movieApi';
import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    backdrop_path: null,
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
      console.log(data);
    });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      backdrop_path,
      original_title,
      release_date,
      vote_average,
      overview,
      genres,
      imgUrl,
    } = this.state;

    const { url, path } = this.props.match;

    return (
      <>
        {original_title !== null && (
          <div>
            <button type="button" onClick={this.handleGoBack}>
              Go Back
            </button>
            <img src={imgUrl + backdrop_path} alt={original_title} />
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
            <p>Additional information</p>
            <div>
              <Link to={`${url}/cast>${url}`}>Cast</Link>
              <Link to={`${url}/reviews>${url}`}>Review</Link>
            </div>
            <Switch>
              <Route path={`${path}/cast>${path}`} component={Cast} />
              <Route path={`${path}/reviews>${path}`} component={Reviews} />
            </Switch>
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
