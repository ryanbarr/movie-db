import React from "react";
import { connect } from "react-redux";

import { withRouter } from "next/router";
import Link from "next/link";
import {
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

import Score from "../../components/Score";
import { MovieDispatch, fetchMovies } from "../../store/movie/actions";
import { MovieState, MovieInterface } from "../../store/movie/types";

interface MovieDetailProps extends MovieState {
  movie: MovieInterface;
  fetchMovies: () => Promise<boolean>;
}

class MovieDetail extends React.Component<MovieDetailProps, MovieState> {
  componentDidMount() {
    // If we don't already have movies, let's get them.
    if (!this.props.movie) this.props.fetchMovies();
  }

  render() {
    const { movie } = this.props;
    
    if (!movie) return null;

    return (
      <Container>
        <h1>{movie.title}</h1>
        <Link href="/" as="/"><a>Close</a></Link>
        <Row>
          <Col sm={4}>
            <Image src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.title} thumbnail fluid />
          </Col>
          <Col sm={8}>
            <div>
              <Score score={movie.popularity} />
            </div>
            <div>
              {movie.release_date}
            </div>
          </Col>
        </Row>
        <p>{movie.overview}</p>
      </Container>
    );
  }
}

// Map the current state to the component's props.
const mapStateToProps = (state: any, ownProps: any) => {
  // Grab the requested Movie ID from the query and pull the movie from state.
  const movieId: number = parseInt(ownProps.router.query.id);
  return {
    movie: state.movies && state.movies.results && state.movies.results.find((movie: any) => movie.id === movieId)
  };
}

const mapDispatchToProps = (dispatch: MovieDispatch) => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetail));