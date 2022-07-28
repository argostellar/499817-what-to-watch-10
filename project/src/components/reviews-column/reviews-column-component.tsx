import { Review } from '../../types/review';
import ReviewComponent from '../review/review-component';

type ReviewsColumnComponentProps = {
  reviews: Review[];
}

function ReviewsColumnComponent({reviews}: ReviewsColumnComponentProps): JSX.Element {
  return (
    <div className="film-card__reviews-col">
      {reviews.map((review) => <ReviewComponent review={review} key={review.id}/>)}
    </div>
  );
}

export default ReviewsColumnComponent;
