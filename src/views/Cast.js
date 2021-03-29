import React, { Component } from 'react';
// import axios from 'axios';
import { getMovieCast } from '../services/movieApi';

class Cast extends Component {
  state = {
    cast: [],
    imgUrl: 'https://image.tmdb.org/t/p/w200/',
  };

  // async componentDidMount() {
  //   const { movieId } = this.props.match.params;
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2e7ddd707cda482bd62363d7d16dcf77&language=en-US`,
  //   );

  //   this.setState({ cast: response.data.cast });
  //   // console.log(movieId);
  //   console.log(response.data.cast);
  // }

  componentDidMount() {
    const id = Number(this.props.match.params.movieId);
    getMovieCast({ id }).then(({ data }) => {
      this.setState({ cast: data.cast });
    });
  }

  render() {
    const { cast, imgUrl } = this.state;
    console.log({ cast });
    return (
      <>
        <h2>cast</h2>
        {cast.length > 0 && (
          <ul>
            {cast.map(({ original_name, character, profile_path, id }) => (
              <li key={id}>
                <p>Original name: {original_name}</p>
                <p>Character: {character}</p>
                <img src={imgUrl + profile_path} alt={original_name} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
