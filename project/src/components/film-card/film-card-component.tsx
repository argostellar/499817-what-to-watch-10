import { Link } from 'react-router-dom';

type FilmCardComponentProps = {
  id: string | number;
  name: string;
  posterSrc: string;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

function FilmCardComponent(props: FilmCardComponentProps): JSX.Element {
  const { id, name, posterSrc, onMouseOver, onMouseLeave } = props;
  const filmAddress = `/films/${id}`;
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        <img src={posterSrc} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={filmAddress}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCardComponent;
