type FilmPageDetailsProps = {
  director: string;
  actors: string[];
  runtime: number;
  genre: string;
  released: number;
}

function FilmPageDetails(props: FilmPageDetailsProps): JSX.Element {
  const { director, actors, runtime, genre, released } = props;

  const formatRuntime = (minutes: number) => {
    let formatedRuntime = `${minutes}m`;
    if (minutes > 60) {
      const hours = Math.floor(minutes / 60);
      formatedRuntime = `${hours}h ${minutes % 60}m`;
    }
    return formatedRuntime;
  };

  const actorsList = actors.join(', ');
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">{actorsList}</span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{formatRuntime(runtime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmPageDetails;
