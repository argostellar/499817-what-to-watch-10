export type Film = {
  id: string | number;
  name: string;
  genre: string;
  releaseDate: number | Date;
  runTime: number | Date | string;
  ratingTotal: string | number;
  description: string;
  director: string;
  actors: string[];
  videoSrc: string;
  posterSrc: string;
  reviews: string[] | number[];
}

export type Films = Film[];
