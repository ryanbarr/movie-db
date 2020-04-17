import fetch from "node-fetch";

import { Container } from "react-bootstrap";

import MovieList from "../components/MovieList";
import { MovieInterface } from "../components/MovieItem";
import { GetStaticProps } from "next";

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

export const getStaticProps: GetStaticProps = async () => {
  const filters = {
    key: process.env.MOVIEDB_KEY,
    year: 2016,
    sort_by: "popularity.desc"
  };
  const response = await fetch(`http://api.themoviedb.org/3/discover/movie?api_key=${filters.key}&year=${filters.year}&sort_by=${filters.sort_by}`);
  const data = await response.json();

  // TMDB returns data sorted by popularity... but not sorted by its popularity metric This sort function would sort by this metric descending, if desired.
  // data.results.sort((a: MovieInterface, b: MovieInterface) => b.popularity - a.popularity);

  return { props: data };
} 

export default Index;