export type Review = {
  id: string | number;
  author: string;
  date: number | Date;
  rating: string | number;
  reviewText: string;
}

export type Reviews = Review[];
