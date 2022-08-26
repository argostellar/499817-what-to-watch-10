import { Review } from '../../types/review';
import ReviewsColumn from '../reviews-column/reviews-column';

type FilmPageReviewsProps = {
  reviews: Review[];
}

function FilmPageReviews(props: FilmPageReviewsProps): JSX.Element {
  const { reviews } = props;

  const reviewsCopy = reviews.slice();
  const firstHalf = reviewsCopy;
  const secondHalf = reviewsCopy.splice(0, reviews.length / 2 ^ 0);

  return (
    <div className="film-card__reviews film-card__row">
      {
        reviews.length !== 0
          ?
          <>
            <ReviewsColumn reviews={firstHalf}/>
            <ReviewsColumn reviews={secondHalf} />
          </>
          :
          <>
            <p style={{color: '#252525'}}>There are no reviews currently.</p>
            <p style={{color: '#252525'}}>You can add one!</p>
          </>
      }
    </div>
  );
}

export default FilmPageReviews;
