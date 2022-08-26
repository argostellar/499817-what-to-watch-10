import { Review } from '../../types/review';
import dayjs from 'dayjs';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({review}: ReviewItemProps): JSX.Element {
  const { comment, user: {name: author}, date, rating } = review;
  /*#TODO Переделать даты на необходимый формат */
  const formatedDate = dayjs(date).format('MMMM D, YYYY');
  const attributeDate = date.toString();
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={attributeDate}>{formatedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewItem;
