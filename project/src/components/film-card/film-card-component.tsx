import { Link } from 'react-router-dom';

type FilmCardComponentProps = {
  name: string;
  posterSrc: string;
}

function FilmCardComponent(props: FilmCardComponentProps): JSX.Element {
  const {name, posterSrc} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterSrc} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to="film-page.html">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCardComponent;
