import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { getSearchMovies } from '../services/movieApi';

class MoviesPage extends Component {
  state = {
    movies: [],
    // query: '',
    imgUrl: 'https://image.tmdb.org/t/p/w780/',
  };

  // componentDidMount() {
  //   const { movies, currentPage } = this.state;
  //   const options = { movies, currentPage };
  //   getSearchMovies(options).then(({ results, page }) => {
  //     this.setState({ movies: results, currentPage: page });
  //     console.log(results);
  //   });
  // }

  componentDidMount() {
    const { query } = this.props.location.search;
    console.log(query);

    if (query) {
      this.fetchMovies();
      console.log(query);
    }
  }

  componentDidUpdate(prevProps) {
    const { query: prevQuery } = prevProps.location.search;
    const { query: nextQuery } = this.props.location.search;
    console.log(prevQuery);
    console.log(nextQuery);
    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
      console.log(prevQuery);
      console.log(nextQuery);
    }
  }

  fetchMovies = query => {
    // const { movies } = this.state;
    // const options = { movies };
    getSearchMovies(query).then(({ results }) => {
      // this.setState(prevState => ({
      //   movies: [...prevState.movies, results],
      //   currentPage: page,
      //   total: total,
      // }));
      this.setState({
        movies: results,
      });
      // console.log(results);
    });
  };

  onChangeQuery = query => {
    // this.setState({ query: query, movies: [] });
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
        {/* <MovieList movies={movies} imgUrl={imgUrl} /> */}
      </>
    );
  }
}

export default MoviesPage;
