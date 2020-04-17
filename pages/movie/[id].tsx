import fetch from "node-fetch";

import { useRouter } from "next/router";
import Link from "next/link";
import {
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

import Score from "../../components/Score";
import { GetStaticProps, GetStaticPaths } from "next";

export interface MovieDetailInterface {
  adult: boolean;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  backdrop_path?: string;
  poster_path?: string;
};

function MovieDetail(movie: MovieDetailInterface) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <h1>{movie.title}</h1>
      <Link href="/"><a>Close</a></Link>
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

// Declaring getStaticPaths() allows us to pre-render all required movie pages at build time to improve application performance.
export const getStaticPaths: GetStaticPaths = async () => {
  const filters = {
    key: process.env.MOVIEDB_KEY,
    year: 2016,
    sort_by: "popularity.desc"
  };
  const response = await fetch(`http://api.themoviedb.org/3/discover/movie?api_key=${filters.key}&year=${filters.year}&sort_by=${filters.sort_by}`);
  const { results: movies } = await response.json();

  const paths = movies.map(movie => `/movie/${movie.id}`);
  
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(`http://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.MOVIEDB_KEY}`);
  const data = await response.json();

  return { props: data };
} 

export default MovieDetail;