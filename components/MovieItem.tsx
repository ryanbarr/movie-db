import styles from "../components/MovieItem.module.css";
import Link from "next/link";
import {
  Col,
  Image,
  ListGroup,
  Row
} from "react-bootstrap";

function MovieItem() {
  return (
    <ListGroup.Item>
      <h2>The Simpsons</h2>
      <Row>
        <Col sm={2}>
          <Image src="https://image.tmdb.org/t/p/w1280/qcr9bBY6MVeLzriKCmJOv1562uY.jpg" alt="The Simpsons" thumbnail fluid />
        </Col>
        <Col sm={8}>
          <div>01/01/2001</div>
          <div>
            <Link href="/movie/1">Details</Link>
          </div>
        </Col>
        <Col sm={2} style={{ textAlign: "right" }}>
          <div className={styles.score}>60%</div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default MovieItem;