import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CustomImage } from "components";
import { useMovieContext } from "contexts/MovieContext";

type TMovieItemProps = {
  id: number;
  title: string;
  poster: string;
  date: string;
  vote: string;
  overview: string;
};

export const MovieItem = ({
  id,
  title,
  poster,
  date,
  vote,
  overview,
}: TMovieItemProps) => {
  const { setMoveId } = useMovieContext();

  return (
    <div
      onClick={() => {
        setMoveId(id);
      }}
      className="d-flex mt-2 mx-auto"
    >
      <CustomImage posterPath={poster} movieId={id} />
      {title && (
        <Container className="">
          <Row className="">
            <Col md={12} className="h5">
              {title}
            </Col>
            <Col>{date}</Col>
            <Col md={12}>{overview}</Col>
            <Col></Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
