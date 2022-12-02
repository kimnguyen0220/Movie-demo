import React, { useEffect, useState } from "react";
import { useMovieContext } from "contexts/MovieContext";
import { useLoading } from "hooks";
import { getListApi, getMovieDetailByIdApi } from "services/movie/MovieService";
import { ListView, MyModal, MovieDetailForm } from "components";
import Spinner from "react-bootstrap/Spinner";
import PullToRefresh from "react-simple-pull-to-refresh";
import styled from "styled-components";
import Skeleton from 'react-loading-skeleton'

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: ghostwhite;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .5;
`;
const MoviePage = () => {
  const { movies, movieId, movieDetail, setMoveId, setMovies, setMovieDetail } =
    useMovieContext();
  const [openModal, setOpenModal] = useState(false);

  const [handleGetListMovie, loading] = useLoading(async () => {
    const finalData = await getListApi();
    setMovies(finalData.results);
  });

  useEffect(() => {
    handleGetListMovie();
  }, []);

  useEffect(() => {
    if (movieId) {
      getMovieDetailByIdApi(movieId).then((res) => {
        setMovieDetail(() => {
          return { ...res };
        });
        setOpenModal(true);
      });
    }
  }, [movieId]);

  return (
    <div>
      {loading && (
        <LoadingWrapper>
          <Spinner animation="border" />
        </LoadingWrapper>
      )}
      <PullToRefresh onRefresh={handleGetListMovie} refreshingContent={""}>
        <ListView data={movies} />
      </PullToRefresh>
      <MyModal
        open={openModal}
        title="Detail"
        onClose={() => {
          setMoveId(undefined)
          setOpenModal(false)}
        }
      >
        <MovieDetailForm movieDetail={movieDetail} />
      </MyModal>
    </div>
  );
};

export default MoviePage;
