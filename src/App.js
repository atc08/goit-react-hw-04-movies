import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />

        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
