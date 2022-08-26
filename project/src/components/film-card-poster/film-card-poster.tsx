type FilmCardPosterProps = {
  posterImage: string;
  name: string;
  size: string;
}

function FilmCardPoster({posterImage, name, size}: FilmCardPosterProps): JSX.Element {
  const posterClassName = `film-card__poster ${size}`;
  return (
    <div className={posterClassName}>
      <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
    </div>
  );
}

export default FilmCardPoster;
