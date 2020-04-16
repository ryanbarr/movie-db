import { ListGroup } from "react-bootstrap";
import MovieItem from "../components/MovieItem";

function MovieList() {
  return (
    <ListGroup>
      {[,2,3,4].map((v, i) => ( <MovieItem key={i} /> ))}
    </ListGroup>
  );
}

export default MovieList;