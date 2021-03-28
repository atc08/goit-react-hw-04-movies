import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Cast from './Cast';

class MovieDetailsPage extends Component {
  state = {
    backdrop_path: null,
    original_title: null,
    vote_average: null,
    overview: null,
    genres: null,
    // movie: null,
    imgUrl: 'https://image.tmdb.org/t/p/w780/',
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=2e7ddd707cda482bd62363d7d16dcf77&language=en-US`,
    );

    this.setState({ ...response.data });
    console.log(movieId);
    console.log(response.data);
  }

  render() {
    const {
      backdrop_path,
      original_title,
      vote_average,
      overview,
      genres,
      imgUrl,
    } = this.state;
    console.log(vote_average);
    console.log(this.props.match.path);
    return (
      <>
        <img src={imgUrl + backdrop_path} alt={original_title} />
        <h2>{original_title}</h2>
        <p>Vote average: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {/* <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul> */}
        <p>Additional information</p>
        <Route path={`${this.props.match.path}/cast`} component={Cast}></Route>
      </>
    );
  }
}

export default MovieDetailsPage;
