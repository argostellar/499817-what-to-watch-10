import { Review } from '../../types/review';

type ReviewComponentProps = {
  review: Review;
}

function ReviewComponent({review}: ReviewComponentProps): JSX.Element {
  const { reviewText, author, date, rating } = review;
  /*#TODO Переделать даты на необходимый формат */
  const formatedDate = date.toString();
  const attributeDate = date.toString();
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviewText}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={attributeDate}>{formatedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewComponent;
