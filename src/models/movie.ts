export class MovieModel {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: Number[];
  original_language: "en" | "vi";
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: any;
  vote_count: number;
  constructor() {}
}
