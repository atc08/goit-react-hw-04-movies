// import axios from 'axios';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { getTrending } from '../services/movieApi';
import MovieList from '../components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
    currentPage: 1,
    imgUrl: 'https://image.tmdb.org/t/p/w780/',
  };

  componentDidMount() {
    const { movies, currentPage } = this.state;
    const options = { movies, currentPage };
    getTrending(options).then(({ results, page }) => {
      this.setState({ movies: results, currentPage: page });
      console.log(results);
    });
  }
  render() {
    console.log(this.props.match.url);
    const { movies, imgUrl } = this.state;
    return (
      <>{movies.length > 0 && <MovieList movies={movies} imgUrl={imgUrl} />}</>
    );
  }
}

export default HomePage;
