import { Film } from '../../types/film';
import FilmCardComponent from '../film-card/film-card-component';

type FilmListComponentProps = {
  films: Film[];
}
// #TODO Необходимо реализовать управление количеством отрисовываемых карточек
function FilmListComponent({films}: FilmListComponentProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        const { id, name, posterSrc } = film;
        return <FilmCardComponent key={id} name={name} posterSrc={posterSrc} />;
      })}
    </div>
  );
}

export default FilmListComponent;
