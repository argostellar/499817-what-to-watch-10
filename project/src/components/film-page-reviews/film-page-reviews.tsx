import { Review } from '../../types/review';
import ReviewsColumn from '../reviews-column/reviews-column';

type FilmPageReviewsProps = {
  reviewIds: string[] | number[];
  reviews: Review[];
}

function FilmPageReviews(props: FilmPageReviewsProps): JSX.Element {
  const { reviews, reviewIds } = props;
  /*#TODO Такой вариант не мутирует данные? Можно ли оптимизировать создание нужного массива? */
  const currentFilmReviews = reviews.filter((review) => {
    let value = null;
    for (const id of reviewIds) {
      if (review.id === id) {
        value = review;
      }
      // return review.id === id ? review : false;
    }
    return value;
  });
  const reviewsCopy = currentFilmReviews.slice();
  const firstHalf = reviewsCopy.splice(0, currentFilmReviews.length / 2 ^ 0);
  const secondHalf = reviewsCopy;
  /*#TODO Они что, сортируются по столбцам по принципу "слева самые высокие оценки, справа самые низкие"? */
  return (
    <div className="film-card__reviews film-card__row">
      <ReviewsColumn reviews={firstHalf}/>
      <ReviewsColumn reviews={secondHalf} />
    </div>
  );
}

export default FilmPageReviews;
