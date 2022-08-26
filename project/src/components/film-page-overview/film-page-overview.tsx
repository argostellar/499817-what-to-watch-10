import { DigitalRating, HumanizedRating } from '../../const';

type FilmPageOverviewProps = {
  rating: number;
  reviewsCount: number;
  description: string;
  director: string;
  actors: string[];
}

function FilmPageOverview(props: FilmPageOverviewProps): JSX.Element {
  const { rating, reviewsCount, description, director, actors } = props;

  const actorsList = actors.join(', ');

  const humanizeRating = (score: number) => {
    let humanizedScore: string = HumanizedRating.NONE;
    if (score > DigitalRating.BAD) {
      humanizedScore = HumanizedRating.BAD;
    }
    if (score > DigitalRating.NORMAL) {
      humanizedScore = HumanizedRating.NORMAL;
    }
    if (score > DigitalRating.GOOD) {
      humanizedScore = HumanizedRating.GOOD;
    }
    if (score > DigitalRating.VERY_GOOD) {
      humanizedScore = HumanizedRating.VERY_GOOD;
    }
    if (score === DigitalRating.AWESOME) {
      humanizedScore = HumanizedRating.AWESOME;
    }
    return humanizedScore;
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{humanizeRating(rating)}</span>
          <span className="film-rating__count">{reviewsCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {actorsList} and other</strong></p>
      </div>
    </>
  );
}

export default FilmPageOverview;
