import { ListGroup } from "react-bootstrap";
import MovieItem, { MovieInterface } from "../components/MovieItem";

type MovieListProps = {
  movies: MovieInterface[];
};

function MovieList({ movies }: MovieListProps) {
  return (
    <ListGroup variant="flush">
      {movies.map((movie, key) => ( <MovieItem key={key} movie={movie} /> ))}
    </ListGroup>
  );
}

export default MovieList;