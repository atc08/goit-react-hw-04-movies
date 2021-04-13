import React, { Component } from 'react';
import { getMovieCast } from '../services/movieApi';

class Cast extends Component {
  state = {
    cast: [],
    imgUrl: 'https://image.tmdb.org/t/p/w200/',
  };

  componentDidMount() {
    const id = Number(this.props.match.params.movieId);
    getMovieCast({ id }).then(({ data }) => {
      this.setState({ cast: data.cast });
    });
  }

  render() {
    const { cast, imgUrl } = this.state;
    return (
      <>
        {cast.length > 0 && (
          <ul className="CastList">
            {cast.map(({ original_name, character, profile_path, id }) => (
              <li key={id} className="CastListItem">
                <img
                  src={imgUrl + profile_path}
                  alt={original_name}
                  className="CastListItemImg"
                />
                <p className="CastListItemInfo">
                  Original name: {original_name}
                </p>
                <p className="CastListItemInfo">Character: {character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
