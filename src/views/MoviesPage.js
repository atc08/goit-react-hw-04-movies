import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import { getSearchMovies } from '../services/movieApi';

class MoviesPage extends Component {
  state = {
    movies: [],
    currentPage: 1,
    imgUrl: 'https://image.tmdb.org/t/p/w780/',
  };

  componentDidMount() {
    const { movies, currentPage } = this.state;
    const options = { movies, currentPage };
    getSearchMovies(options).then(({ results, page }) => {
      this.setState({ movies: results, currentPage: page });
      console.log(results);
    });
  }
  render() {
    const { movies, imgUrl } = this.state;
    return (
      <>
        {/* <AppBar /> */}
        {movies.length > 0 && <MovieList movies={movies} imgUrl={imgUrl} />}
      </>
    );
  }
}

export default MoviesPage;
