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
        const { id, name, videoSrc, posterSrc } = film;
        return (
          <FilmCardComponent
            key={id}
            id={id}
            name={name}
            videoSrc={videoSrc}
            posterSrc={posterSrc}
          />
        );
      })}
    </div>
  );
}

export default FilmListComponent;
