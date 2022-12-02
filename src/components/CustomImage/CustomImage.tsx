import { useEffect, useState } from "react";
import { getImageByMovieIdApi } from "services/movie/MovieService";
import classnames from "classnames";
import { useLoading } from "hooks";

import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

type TCustomImageProps = {
  posterPath: string;
  movieId: number | undefined;
};
export const CustomImage = ({ posterPath, movieId }: TCustomImageProps) => {
  const [imagePath, setImage] = useState("");
  const url = "https://image.tmdb.org/t/p/w188_and_h282_bestv2";

  const imageClass = classnames("bg-light tab-pane fade", {
    "active show": imagePath,
  });

  const [handleGetListMovie, loading] = useLoading(async () => {
    const finalData = await getImageByMovieIdApi(movieId!);
    setImage(finalData.poster_path);
  });

  useEffect(() => {
    if (movieId) {
      handleGetListMovie();
    }
  }, []);

  return (
    <div style={{ width: 100, height: 100 }}>
      {loading ? (
        <Skeleton height="100%" />
      ) : (
        <img
          className={imageClass}
          width={100}
          height={100}
          src={`${url}${imagePath}`}
        />
      )}
    </div>
  );
};
