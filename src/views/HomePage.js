import React, { Component } from 'react';
import { getTrending } from '../services/movieApi';
import MovieList from '../components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
    imgUrl: 'https://image.tmdb.org/t/p/w780/',
  };

  componentDidMount() {
    const { movies } = this.state;
    getTrending(movies).then(({ results }) => {
      this.setState({ movies: results });
    });
  }
  render() {
    const { movies, imgUrl } = this.state;
    return (
      <>{movies.length > 0 && <MovieList movies={movies} imgUrl={imgUrl} />}</>
    );
  }
}

export default HomePage;
