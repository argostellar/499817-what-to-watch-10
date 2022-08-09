import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

// #TODO Необходимо реализовать управление количеством отрисовываемых карточек
function FilmList({films}: FilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        const { id, name, videoSrc, posterSrc } = film;
        return (
          <FilmCard
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

export default FilmList;
