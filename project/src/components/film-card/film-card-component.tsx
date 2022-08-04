import { Link } from 'react-router-dom';
import { FILM_CARD_VALUES } from '../../const';
import VideoPlayer from '../video-player/video-player-component';

type FilmCardComponentProps = {
  id: string | number;
  currentId: string | number | null;
  name: string;
  videoSrc: string;
  posterSrc: string;
  isPlaying: boolean;
  onMouseOver: (id: string | number) => void;
  onMouseOut: () => void;
}

function FilmCardComponent(props: FilmCardComponentProps): JSX.Element {
  const { id, name, videoSrc, posterSrc, isPlaying, onMouseOut, onMouseOver, currentId } = props;
  const filmAddress = `/films/${id}`;

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => onMouseOver(id)} onMouseOut={onMouseOut}>
      <div className="small-film-card__image">
        {/* <img src={posterSrc} alt={name} width="280" height="175" /> */}
        <VideoPlayer
          id={id}
          currentId={currentId}
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

export default FilmCardComponent;
