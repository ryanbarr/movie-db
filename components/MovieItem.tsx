import Link from "next/link";
import {
  Col,
  Image,
  ListGroup,
  Row
} from "react-bootstrap";

import Score from "../components/Score";

export interface MovieInterface {
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

type MovieItemProps = {
  movie: MovieInterface;
};

function MovieItem({ movie }: MovieItemProps) {
  return (
    <ListGroup.Item>
      <h2>{movie.title}</h2>
      <Row>
        <Col sm={2}>
          <Image src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.title} thumbnail fluid />
        </Col>
        <Col sm={8}>
          <div>{movie.release_date}</div>
          <div>
            <Link href={`/movie/${movie.id}`}><a>Details</a></Link>
          </div>
        </Col>
        <Col sm={2} style={{ textAlign: "right" }}>
          <Score score={movie.popularity} />
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default MovieItem;