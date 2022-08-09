type FilmPageOverviewProps = {
  rating: string | number;
  reviewsCount: number;
  description: string[];
  director: string;
  actors: string[];
}

function FilmPageOverview(prop: FilmPageOverviewProps): JSX.Element {
  const { rating, reviewsCount, description, director, actors } = prop;
  const actorsList = actors.join(', ');
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          {/*#TODO Человечный формат обработки оценки */}
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{reviewsCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {/*#TODO Возможно стоит переделать в более простую конструкцию, без массива, а через нарезку строки slice */}
        {description.map((paragraph) => <p key={Math.random() * Math.random()}>{paragraph}</p>)}

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {actorsList} and other</strong></p>
      </div>
    </>
  );
}

export default FilmPageOverview;
