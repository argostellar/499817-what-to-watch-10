type FilmCardBackgroundProps = {
  backgroundImage: string;
  name: string;
  backgroundColor: string;
}

function FilmCardBackground(props: FilmCardBackgroundProps): JSX.Element {
  const { backgroundImage, name, backgroundColor } = props;
  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} style={{ backgroundColor: backgroundColor }} />
    </div>
  );
}

export default FilmCardBackground;
