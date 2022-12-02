import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { MovieModel } from "models";
type TMovieContext = {
  movies: MovieModel[];
  movieId: number | undefined;
  movieDetail: MovieModel | undefined;
  setMovies: React.Dispatch<React.SetStateAction<MovieModel[]>>;
  setMoveId: React.Dispatch<React.SetStateAction<number | undefined>>;
  setMovieDetail: React.Dispatch<React.SetStateAction<MovieModel | undefined>>;

};

const MovieContext = createContext<TMovieContext>({
  movies: [],
  movieId: undefined,
  movieDetail: undefined,
  setMovies: () => {},
  setMoveId: () => {},
  setMovieDetail: () => {},
});

export const MovieProvider = ({ children }: any) => {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [movieId, setMoveId] = useState<number | undefined>(undefined);
  const [movieDetail, setMovieDetail] = useState<MovieModel | undefined>(undefined)
  const values = useMemo(() => {
    return {
      movies,
      movieId,
      movieDetail,
      setMovies,
      setMoveId,
      setMovieDetail
    };
  }, [movies, movieId, movieDetail]);

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContext;

export const useMovieContext = () => useContext(MovieContext);
