import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getTrending } from '../services/movieApi';

class HomePage extends Component {
  state = {
    movies: [],
    page: 1,
    imgUrl: 'https://image.tmdb.org/t/p/w780/',
  };

  // const BASE_URL = 'https://api.themoviedb.org/3/';
  // const API_KEY = '2e7ddd707cda482bd62363d7d16dcf77';
  // axios.defaults.baseURL = BASE_URL;

  async componentDidMount() {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '2e7ddd707cda482bd62363d7d16dcf77';
    axios.defaults.baseURL = BASE_URL;
    const response = await axios.get(
      `${BASE_URL}trending/all/week?api_key=${API_KEY}&page=1`,
    );

    this.setState({ movies: response.data.results });
    console.log(this.state.movies);
  }

  render() {
    console.log(this.props.match.url);
    const { movies, imgUrl } = this.state;
    return (
      <>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={imgUrl + movie.backdrop_path}
                  alt={movie.original_title}
                />
                <p>
                  {movie.original_title} {movie.release_date}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
