import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { APIRoute, FILM_CARD_VALUES } from '../../const';
import { getCorrectAPIRoute } from '../../film';
import { useAppDispatch } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import PreviewVideoPlayer from '../preview-video-player/preview-video-player';

type FilmCardProps = {
  id: number;
  name: string;
  videoSrc: string;
  posterSrc: string;
  backgroundColor: string;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { id, name, videoSrc, posterSrc, backgroundColor } = props;
  const filmAddress = `/films/${id}`;

  const [isPlaying, setPlayingState] = useState(false);
  let hoverTimerID: NodeJS.Timeout | undefined;

  const handleMouseOver = () => {
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

  const handleClick = (evt: MouseEvent<HTMLElement>) => {
    dispatch(redirectToRoute(getCorrectAPIRoute(APIRoute.Film, id)));
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onClick={handleClick}
    >
      <div
        className="small-film-card__image"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <PreviewVideoPlayer
          videoSrc={videoSrc}
          posterSrc={posterSrc}
          width={FILM_CARD_VALUES.WIDTH}
          height={FILM_CARD_VALUES.HEIGHT}
          backgroundColor={backgroundColor}
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
