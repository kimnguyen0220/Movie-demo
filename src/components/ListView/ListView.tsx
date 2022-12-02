
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { MovieItem } from "components";
import { useMovieContext } from "contexts/MovieContext";

import { MovieModel } from "models";
import classnames from "classnames";
import styled from "styled-components";

type TListViewProps = {
  data: MovieModel[];
};

const WrapperItem = styled.div`
  cursor: pointer;
  margin: 1rem;
  padding: 1rem;
  border: solid 1px lavender;
  &:hover {
    border-color: black;
  }
`;
export const ListView = ({ data }: TListViewProps) => {
  const { movieId, movieDetail } = useMovieContext();
  const [showListVertical, setShowListVertical] = useState(true);
  const classList = classnames("d-flex p-3 flex-wrap flex-row", {
    "flex-column": showListVertical,
  });

  return (
    <>
      <Button variant="primary" onClick={() => setShowListVertical(true)}>
        List view
      </Button>
      <Button variant="success" onClick={() => setShowListVertical(false)}>
        Grid view{" "}
      </Button>
      <div className={classList}>
        {data.map((item) => (
          <WrapperItem
            key={item.id}
            className={classnames({ "bg-success": item?.id === movieId })}
          >
            <MovieItem
              id={item.id}
              title={showListVertical ? item.title : ""}
              poster={item.poster_path}
              date={showListVertical ? item.release_date : ""}
              vote={item.vote_average}
              overview={showListVertical ? item.overview : ""}
            />
          </WrapperItem>
        ))}
      </div>
    </>
  );
};
