import MovieList from "../components/MovieList";
import {
  Container
} from "react-bootstrap";

function Index() {
  return (
    <Container fluid="md">
      <h1>Movies</h1>
      <MovieList />
    </Container>
  );
}

export default Index;