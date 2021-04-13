import React, { Component } from 'react';
import queryString from 'query-string';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { getSearchMovies } from '../services/movieApi';

class MoviesPage extends Component {
  state = {
    movies: [],
    imgUrl: 'https://image.tmdb.org/t/p/w780/',
    searchQuery: '',
  };

  componentDidMount() {
    const { search, pathname } = this.props.location;

    if (search && pathname) {
      this.setState({
        searchQuery: queryString.parse(search).query,
      });
    }
  }

  componentDidUpdate(prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.fetchMovies(searchQuery);
    }
  }

  fetchMovies() {
    const { movies, searchQuery } = this.state;
    const options = { movies, searchQuery };
    if (!searchQuery) {
      return;
    }
    getSearchMovies(options).then(({ results }) => {
      this.setState({
        movies: [...results],
      });
      return;
    });
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query });
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, imgUrl } = this.state;
    return (
      <>
        <SearchBar onChange={this.onChangeQuery} />
        {movies.length > 0 && <MovieList movies={movies} imgUrl={imgUrl} />}
      </>
    );
  }
}

export default MoviesPage;
