import { ListGroup } from "react-bootstrap";
import MovieItem from "../components/MovieItem";
import { MovieInterface } from "../store/movie/types";

type MovieListProps = {
  movies: MovieInterface[];
};

function MovieList({ movies }: MovieListProps) {
  return (
    <ListGroup variant="flush">
      {(movies) ? movies.map((movie, key) => ( <MovieItem key={key} movie={movie} /> )) : null}
    </ListGroup>
  );
}

export default MovieList;