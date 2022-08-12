import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FILM_CARD_VALUES } from '../../const';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  id: string | number;
  name: string;
  videoSrc: string;
  posterSrc: string;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const { id, name, videoSrc, posterSrc } = props;
  const filmAddress = `/films/${id}`;

  const [isPlaying, setPlayingState] = useState(false);
  let hoverTimerID: NodeJS.Timeout | undefined;

  const handleMouseOver = () => {
    // setCardState((prevState) => ({ ...prevState, currentId: id }));
    hoverTimerID = setTimeout(() => {
      setPlayingState(true);
    }, FILM_CARD_VALUES.PREVIEW_TIMEOUT);
  };

  const handleMouseOut = () => {
    if (isPlaying === false) {
      clearTimeout(hoverTimerID);
    }
    setPlayingState(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
    >
      <div
        className="small-film-card__image"
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
      >
        {/* <img src={posterSrc} alt={name} width="280" height="175" /> */}
        <VideoPlayer
          videoSrc={videoSrc}
          posterSrc={posterSrc}
          width={FILM_CARD_VALUES.WIDTH}
          height={FILM_CARD_VALUES.HEIGHT}
          isMuted
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={filmAddress}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
