import React from "react";
import { connect } from "react-redux";

import { withRouter } from "next/router";
import Link from "next/link";
import {
  Button,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

import Score from "../../components/Score";
import { MovieDispatch, fetchMovies, toggleFavorite } from "../../store/movie/actions";
import { MovieState, MovieInterface } from "../../store/movie/types";

interface MovieDetailState extends MovieState {
  movie: MovieInterface;
}

interface MovieDetailProps extends MovieDetailState {
  fetchMovies: () => Promise<boolean>;
  toggleFavorite: (movie: MovieInterface) => void;
}

class MovieDetail extends React.Component<MovieDetailProps, MovieDetailState> {
  constructor(props: MovieDetailProps) {
    super(props);

    this.state = {
      movie: props.movie,
      isFetching: false,
      isLoaded: false,
      results: props.results
    };
  }
  componentDidMount() {
    // If we don't already have movies, let's get them.
    if (!this.props.movie) this.props.fetchMovies();
  }

  componentWillReceiveProps(nextProps: MovieDetailProps) {
    if (this.props.results !== nextProps.results) {
      this.setState({
        movie: nextProps.movie
      });
    }
  }

  handleFavorite(movie: MovieInterface) {
    this.props.toggleFavorite(movie);
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
            <Row>
              <Col sm={6}>
                <Score score={movie.popularity} />
              </Col>
              <Col sm={6}>
                <Button onClick={() => this.handleFavorite(movie)}>
                  {(movie.favorite) ? "Unfavorite" : "Favorite"}
                </Button>
              </Col>
            </Row>
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
    results: state.movies && state.movies.results,
    movie: state.movies && state.movies.results && state.movies.results.find((movie: any) => movie.id === movieId)
  };
}

const mapDispatchToProps = (dispatch: MovieDispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
  toggleFavorite: (movie: MovieInterface) => dispatch(toggleFavorite(movie))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetail));