import styles from "./MovieItem.module.css";

import Link from "next/link";
import {
  Button,
  Col,
  Image,
  ListGroup,
  Row
} from "react-bootstrap";

import Score from "../components/Score";
import { MovieInterface } from "../store/movie/types";

type MovieItemProps = {
  movie: MovieInterface;
};

function MovieItem({ movie }: MovieItemProps) {
  return (
    <ListGroup.Item>
      <h2 className={styles.title}>{movie.title}</h2>
      <Row>
        <Col xs={4}>
          <Image src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} alt={movie.title} thumbnail fluid />
        </Col>
        <Col>
          <Row>
            <Col>
              <strong>Released:</strong>{' '}
              <span>{movie.release_date}</span>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Score score={movie.popularity} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Link href="/movie/[id]" as={`/movie/${movie.id}`}>
                <Button>Details</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default MovieItem;