import fetch from "node-fetch";

import MovieList from "../components/MovieList";
import { Container } from "react-bootstrap";

export interface MovieResults {
  page: number;
  results: Array<Object>;
  total_pages: number;
  total_results: number;
}

function Index({ results }: MovieResults) {
  return (
    <Container fluid="md">
      <h1>Movies</h1>
      <MovieList movies={results} />
    </Container>
  );
}

export async function getServerSideProps()  {
  const response = await fetch(`http://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_KEY}`);
  const data = await response.json();

  return { props: data };
} 

export default Index;