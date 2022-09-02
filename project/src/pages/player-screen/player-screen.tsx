import { useState, MouseEvent, useEffect } from 'react';
import FullscreenIcon from '../../components/fullscreen-icon/fullscreen-icon';
import PageTitle from '../../components/page-title/page-title';
import PauseIcon from '../../components/pause-icon/pause-icon';
import PlayIcon from '../../components/play-icon/play-icon';
import VideoPlayer from '../../components/video-player/video-player';
import { APIRoute, Page, TimeUnit, PROGRESS_BAR_MAX_VALUE } from '../../const';
import { getCorrectAPIRoute } from '../../film';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useFilmId } from '../../hooks/use-film-id';
import { redirectToRoute } from '../../store/action';
import { fetchCurrentFilmAction } from '../../store/api-actions';

type PlayerScreenState = {
  isPlaying: boolean;
  isFullscreen: boolean;
  currentTime: number;
  duration: number;
};

function PlayerScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id, name, backgroundColor, previewImage, videoLink } = useAppSelector((state) => state.currentFilm);
  const isDirect = useAppSelector((state) => state.isDirect);
  const pageName = `${Page.Player} ${name}`;
  const filmId = useFilmId();

  const [playerScreenState, setScreenState] = useState<PlayerScreenState>({
    isPlaying: false,
    isFullscreen: false,
    currentTime: 0,
    duration: 0,
  });

  useEffect(() => {
    if (filmId !== undefined) {
      resetPlayerScreen();
      dispatch(fetchCurrentFilmAction(filmId));
    }
  }, [filmId]);

  useEffect(() => {
    if (playerScreenState.currentTime === playerScreenState.duration) {
      setScreenState((prevState) => ({
        ...prevState,
        isPlaying: false,
      }));
    }
  }, [playerScreenState.currentTime, playerScreenState.duration]);

  const handleExitBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    resetPlayerScreen();
    dispatch(redirectToRoute(getCorrectAPIRoute(APIRoute.Film, id)));
  };

  const handlePlayBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setScreenState((prevState) => ({
      ...prevState,
      isPlaying: !prevState.isPlaying,
    }));
  };

  const handleFullscreenBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setScreenState((prevState) => ({
      ...prevState,
      isFullscreen: true,
    }));
  };

  const resetPlayerScreen = () => {
    setScreenState(() => ({
      isPlaying: false,
      isFullscreen: false,
      currentTime: 0,
      duration: 0,
    }));
  };

  const revertFullscreenStatus = () => {
    setScreenState((prevState) => ({
      ...prevState,
      isFullscreen: false,
    }));
  };

  const getLoadStatus = () => {
    setScreenState((prevState) => ({
      ...prevState,
      isPlaying: true,
    }));
  };

  const getCurrentTime = (seconds: number) => {
    setScreenState((prevState) => ({
      ...prevState,
      currentTime: seconds,
    }));
  };

  const getCurrentDuration = (seconds: number) => {
    setScreenState((prevState) => ({
      ...prevState,
      duration: seconds,
    }));
  };

  const getCorrectTime = () => {
    const duration = playerScreenState.duration !== null ? playerScreenState.duration : TimeUnit.ZERO;
    const currentTime = playerScreenState.currentTime !== null ? playerScreenState.currentTime : TimeUnit.ZERO;

    const seconds = Math.trunc(duration - currentTime);
    const minutes = Math.floor(seconds / TimeUnit.NEXT_ORDER);
    const hours = Math.floor(minutes / TimeUnit.NEXT_ORDER);

    const currentSeconds = seconds % TimeUnit.NEXT_ORDER;
    const currentMinutes = minutes % TimeUnit.NEXT_ORDER;

    const secondsTextValue = currentSeconds < TimeUnit.TEN ? `0${currentSeconds}` : `${currentSeconds}`;
    const minutesTextValue = currentMinutes < TimeUnit.TEN ? `0${currentMinutes}` : `${currentMinutes}`;
    let hoursTextValue = '';

    if (hours !== TimeUnit.ZERO) {
      hoursTextValue = hours < TimeUnit.TEN ? `0${hours}:` : `${hours}:`;
    }

    return `-${hoursTextValue}${minutesTextValue}:${secondsTextValue}`;
  };

  const getCorrectTogglerPostion = () => {
    const duration = playerScreenState.duration;
    const currentTime = playerScreenState.currentTime;

    let result: number = TimeUnit.ZERO;

    if (duration !== TimeUnit.ZERO && currentTime !== TimeUnit.ZERO) {
      result = currentTime / duration * PROGRESS_BAR_MAX_VALUE;
    }

    return result;
  };

  const playBtnText = playerScreenState.isPlaying ? 'Pause' : 'Play';
  const correctIcon = playerScreenState.isPlaying ? <PauseIcon /> : <PlayIcon />;

  return (
    <div className="player">
      <PageTitle pageName={pageName} />
      <VideoPlayer
        videoSrc={videoLink}
        previewImg={previewImage}
        isPlaying={playerScreenState.isPlaying}
        isFullscreen={playerScreenState.isFullscreen}
        isDirect={isDirect}
        updateCurrentTime={getCurrentTime}
        getDuration={getCurrentDuration}
        backgroundColor={backgroundColor}
        changeFullscreenStatus={revertFullscreenStatus}
        getLoadStatus={getLoadStatus}
      />

      <button type="button" className="player__exit" onClick={handleExitBtnClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={getCorrectTogglerPostion()} max={PROGRESS_BAR_MAX_VALUE}></progress>
            <div className="player__toggler" style={{ left: `${getCorrectTogglerPostion()}%`, }}>Toggler</div>
          </div>
          <div className="player__time-value">{getCorrectTime()}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayBtnClick}>
            {correctIcon}
            <span>{playBtnText}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleFullscreenBtnClick}>
            <FullscreenIcon />
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
