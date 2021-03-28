import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
// import Cast from './views/Cast';
import Reviews from './views/Reviews';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/movies"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/movies/:movieId"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Details
            </NavLink>
            <ul>
              <li>
                <NavLink
                  to="/movies/:movieId/cast"
                  className="NavLink"
                  activeClassName="NavLink--active"
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies/:movieId/reviews"
                  className="NavLink"
                  activeClassName="NavLink--active"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/movies/:movieId/cast" component={Cast} /> */}
          <Route path="/movies/:movieId/reviews" component={Reviews} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
