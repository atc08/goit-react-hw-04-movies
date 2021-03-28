import React, { Component } from 'react';
import axios from 'axios';

class Cast extends Component {
  state = {};

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2e7ddd707cda482bd62363d7d16dcf77&language=en-US`,
    );

    this.setState({ ...response.data });
    console.log(movieId);
    console.log(response.data);
  }

  render() {
    return <h3>Cast</h3>;
  }
}

export default Cast;
