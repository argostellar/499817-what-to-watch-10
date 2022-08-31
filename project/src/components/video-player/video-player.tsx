import { SyntheticEvent, useEffect, useRef } from 'react';

type VideoPlayerProps = {
  videoSrc: string;
  previewImg: string;
  isPlaying: boolean;
  isFullscreen: boolean;
  backgroundColor: string;
  updateCurrentTime: (currentTime: number) => void;
  getDuration: (duration: number) => void;
  getLoadStatus: () => void;
  changeFullscreenStatus: () => void;
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const {
    videoSrc,
    isPlaying,
    isFullscreen,
    previewImg,
    backgroundColor,
    updateCurrentTime,
    getDuration,
    changeFullscreenStatus,
    getLoadStatus,
  } = props;
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (playerRef.current === null) {
      return;
    }

    if (isPlaying && playerRef.current.paused) {
      playerRef.current.play();
      return;
    }

    if (!isPlaying) {
      playerRef.current.pause();
      return;
    }

    playerRef.current.load();
  }, [isPlaying]);

  useEffect(() => {
    if (playerRef.current === null) {
      return;
    }

    if (isFullscreen) {
      handleFullscreenChange();
    }
  }, [isFullscreen]);

  const handleUpdate = (evt: SyntheticEvent<HTMLVideoElement>) => {
    if (playerRef.current !== null) {
      updateCurrentTime(playerRef.current.currentTime);
    }
  };

  const handleCanPlay = (evt: SyntheticEvent<HTMLVideoElement>) => {
    if (playerRef.current !== null) {
      getDuration(playerRef.current.duration);
      getLoadStatus();
    }
  };

  const handleFullscreenChange = () => {
    if (playerRef.current !== null) {
      playerRef.current.requestFullscreen();
    }
    changeFullscreenStatus();
  };

  return (
    <video
      ref={playerRef}
      onTimeUpdate={handleUpdate}
      onCanPlay={handleCanPlay}
      className="player__video"
      src={videoSrc}
      poster={previewImg}
      style={{ objectFit: 'cover', backgroundColor: backgroundColor }}
    >
    </video>
  );
}

export default VideoPlayer;
