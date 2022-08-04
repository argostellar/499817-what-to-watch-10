import { useState } from 'react';
import { Film } from '../../types/film';
import FilmCardComponent from '../film-card/film-card-component';

type FilmListComponentProps = {
  films: Film[];
}

type cardState = {
  isPlaying: boolean;
  currentId: string | number | null;
}

// #TODO Необходимо реализовать управление количеством отрисовываемых карточек
function FilmListComponent({films}: FilmListComponentProps): JSX.Element {
  const [currentCard, setCurrentCard] = useState<cardState>({
    currentId: null,
    isPlaying: false
  });
  let hoverTimerID: NodeJS.Timeout | undefined;

  const handleMouseOver = (id: string | number) => {
    // setCurrentCard((prevState) => ({ ...prevState, currentId: id }));
    hoverTimerID = setTimeout(() => {
      setCurrentCard(() => ({ currentId: id, isPlaying: true }));
    }, 2000);
  };

  const handleMouseOut = () => {
    if (currentCard.isPlaying === false) {
      clearTimeout(hoverTimerID);
    }
    setCurrentCard(() => ({ currentId: null, isPlaying: false }));
  };

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
            isPlaying={currentCard.isPlaying}
            currentId={currentCard.currentId}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        );
      })}
    </div>
  );
}

export default FilmListComponent;
