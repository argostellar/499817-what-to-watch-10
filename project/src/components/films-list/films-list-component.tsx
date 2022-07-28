import { useState } from 'react';
import { Film } from '../../types/film';
import FilmCardComponent from '../film-card/film-card-component';

type FilmListComponentProps = {
  films: Film[];
}

type cardState = {
  isSelected: boolean;
  currentCardId: string | number | null;
  videoSrc: string | null;
}

// #TODO Необходимо реализовать управление количеством отрисовываемых карточек
function FilmListComponent({films}: FilmListComponentProps): JSX.Element {
  const [currentCard, setCurrentCard] = useState<cardState>({
    isSelected: false,
    currentCardId: null,
    videoSrc: null,
  });

  const handleCardMouseOver = (film: Film) => {
    const {id, videoSrc} = film;
    setCurrentCard({...currentCard, isSelected: true, currentCardId: id, videoSrc: videoSrc});
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        const { id, name, posterSrc } = film;
        return (
          <FilmCardComponent
            key={id}
            id={id}
            name={name}
            posterSrc={posterSrc}
            onMouseOver={() => handleCardMouseOver(film)}
            onMouseLeave={() => setCurrentCard({...currentCard, isSelected: false})}
          />
        );
      })}
    </div>
  );
}

export default FilmListComponent;
