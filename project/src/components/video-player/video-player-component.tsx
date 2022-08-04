import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  id: string | number;
  currentId: string | number | null;
  videoSrc: string;
  posterSrc: string;
  width: number;
  height: number;
  isMuted: boolean;
  isPlaying: boolean;
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const { id, currentId, videoSrc, isMuted, isPlaying, posterSrc, width, height } = props;
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (playerRef.current === null) {
      return;
    }

    if (isPlaying && id === currentId) {
      playerRef.current.play();
      return;
    }

    playerRef.current.load();
  }, [isPlaying, currentId, id]);

  return (
    <video
      ref={playerRef}
      width={width}
      height={height}
      src={videoSrc}
      poster={posterSrc}
      muted={isMuted}
      style={{objectFit: 'cover'}}
    >
    </video>
  );
}

export default VideoPlayer;
