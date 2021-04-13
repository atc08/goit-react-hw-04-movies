import React, { Component } from 'react';
import { getMovieReview } from '../services/movieApi';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const id = Number(this.props.match.params.movieId);
    getMovieReview({ id }).then(({ data }) => {
      this.setState({ reviews: data.results });
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 && (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>"{content}"</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
