import React from "react";
import { connect } from "react-redux";

import { Container } from "react-bootstrap";

import MovieList from "../components/MovieList";
import { MovieState } from "../store/movie/types";
import { fetchMovies, MovieDispatch } from "../store/movie/actions";

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

    // We could return a loading spinner here. Instead of returning nothing, React prefers null so it knows to not attempt any sort of render.
    if (isFetching) return null;

    return (
      <Container fluid="md">
        <h1>Movies</h1>
        <MovieList movies={results && results || []} />
      </Container>
    );
  }
};

// Map the current state to the component's props.
const mapStateToProps = (state: any) => state.movies;

const mapDispatchToProps = (dispatch: MovieDispatch) => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);