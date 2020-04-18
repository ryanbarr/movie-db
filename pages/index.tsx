import React from "react";
import { connect } from "react-redux";

import { Container } from "react-bootstrap";
import Header from "../components/Header";

import MovieList from "../components/MovieList";
import { MovieState } from "../store/movie/types";
import { fetchMovies, MovieDispatch } from "../store/movie/actions";
import { AppStateInterface } from "../store";

interface IndexProps extends MovieState {
  fetchMovies: () => Promise<boolean>;
}

class Index extends React.Component<IndexProps, MovieState> {
  componentDidMount() {
    // If we don't already have movies, let's get them.
    if (!this.props.isLoaded && !this.props.results) this.props.fetchMovies();
  }

  render() {
    const { isFetching, results } = this.props;

    if (isFetching) return null;

    return (
      <>
        <Header title="Movies" />
        <Container>
          <MovieList movies={results && results || []} />
        </Container>
      </>
    );
  }
};

// Map the current state to the component's props.
const mapStateToProps = (state: AppStateInterface) => state.movies;

const mapDispatchToProps = (dispatch: MovieDispatch) => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);