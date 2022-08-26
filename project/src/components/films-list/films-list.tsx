import { Films } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films;
}

function FilmList({films}: FilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        const { id, name, previewVideoLink: videoSrc, previewImage: posterSrc, backgroundColor } = film;
        return (
          <FilmCard
            key={id}
            id={id}
            name={name}
            videoSrc={videoSrc}
            posterSrc={posterSrc}
            backgroundColor={backgroundColor}
          />
        );
      })}
      {films.length === 0 && <p>There are no films currently</p>}
    </div>
  );
}

export default FilmList;
