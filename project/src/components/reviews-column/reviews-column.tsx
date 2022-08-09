import { Review } from '../../types/review';
import ReviewItem from '../review/review';

type ReviewsColumnProps = {
  reviews: Review[];
}

function ReviewsColumn({reviews}: ReviewsColumnProps): JSX.Element {
  return (
    <div className="film-card__reviews-col">
      {reviews.map((review) => <ReviewItem review={review} key={review.id}/>)}
    </div>
  );
}

export default ReviewsColumn;
