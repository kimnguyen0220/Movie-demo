import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { MovieModel } from "models";

import { CustomImage } from "components";

type TMovieDetailFormProps = {
  movieDetail: MovieModel | undefined;
};
export const MovieDetailForm = ({ movieDetail }: TMovieDetailFormProps) => {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="col-md-10 bg-light border mt-2 mx-auto"
    >
      <CustomImage
        movieId={movieDetail?.id}
        posterPath={movieDetail?.poster_path ?? ""}
      />
      <Container className="">
        <Row className="">
          <Col md={12}>
            <Row>
              <Col className="h5" md={8}>
                {movieDetail?.title}
              </Col>
              <Col className="span">rating {movieDetail?.vote_average}</Col>
            </Row>
          </Col>
          <Col>{movieDetail?.release_date ?? ""}</Col>
          <Col md={12}>{movieDetail?.overview}</Col>
        </Row>
      </Container>
    </Stack>
  );
};
