import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import axios from 'axios';
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
    // movieDetails: [],
    imgUrl: 'https://image.tmdb.org/t/p/w780/',
  };

  // async componentDidMount() {
  //   const { movieId } = this.props.match.params;
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${movieId}?api_key=2e7ddd707cda482bd62363d7d16dcf77&language=en-US`,
  //   );

  //   this.setState({ ...response.data });
  //   console.log(movieId);
  //   console.log(response.data);
  // }

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
      // movieDetails,
      backdrop_path,
      original_title,
      release_date,
      vote_average,
      overview,
      genres,
      imgUrl,
    } = this.state;
    // const { movieId } = this.props.match.params;
    // console.log(this.props.match.params);
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
              <Link to={`${this.props.match.url}/cast>${this.props.match.url}`}>
                Cast
              </Link>
              <Link
                to={`${this.props.match.url}/reviews>${this.props.match.url}`}
              >
                Review
              </Link>
            </div>
            <Route
              path={`${this.props.match.path}/cast>${this.props.match.path}`}
              component={Cast}
            />
            <Route
              path={`${this.props.match.path}/reviews>${this.props.match.path}`}
              component={Reviews}
            />
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
