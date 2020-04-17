import { useRouter } from "next/router";
import Link from "next/link";
import {
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

import Score from "../../components/Score";

function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <h1>The Simpsons</h1>
      <Link href="/">Close</Link>
      <Row>
        <Col sm={4}>
          <Image src="https://image.tmdb.org/t/p/w1280/qcr9bBY6MVeLzriKCmJOv1562uY.jpg" alt="The Simpsons" thumbnail fluid />
        </Col>
        <Col sm={8}>
          <div>
            <Score score={62} />
          </div>
          <div>
            01/01/2001
          </div>
        </Col>
      </Row>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus urna venenatis ex hendrerit, pellentesque vehicula urna tincidunt. Pellentesque nec consectetur leo, eget interdum purus. Nulla at suscipit magna. In varius felis vitae odio posuere, at mollis lectus vehicula. Nam at lacus ac nibh scelerisque mollis. Mauris justo lectus, suscipit ac magna sit amet, imperdiet pharetra elit. Proin neque mi, feugiat quis tempus ac, maximus a felis. Nam id sollicitudin velit. Fusce pharetra nulla lorem, eu interdum neque pretium non.</p>
    </Container>
  );
}

export default MovieDetail;