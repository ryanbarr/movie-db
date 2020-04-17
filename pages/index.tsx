import fetch from "node-fetch";

import { Container } from "react-bootstrap";

import MovieList from "../components/MovieList";
import { MovieInterface } from "../components/MovieItem";

export interface MovieResults {
  page: number;
  results: MovieInterface[];
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