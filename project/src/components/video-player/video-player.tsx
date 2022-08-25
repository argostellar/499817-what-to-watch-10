import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  videoSrc: string;
  posterSrc: string;
  width: number;
  height: number;
  isMuted: boolean;
  isPlaying: boolean;
  backgroundColor: string;
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const { videoSrc, isMuted, isPlaying, posterSrc, width, height, backgroundColor } = props;
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (playerRef.current === null) {
      return;
    }

    if (isPlaying) {
      playerRef.current.play();
      return;
    }

    playerRef.current.load();
  }, [isPlaying]);

  return (
    <video
      ref={playerRef}
      width={width}
      height={height}
      src={videoSrc}
      poster={posterSrc}
      muted={isMuted}
      style={{objectFit: 'cover', backgroundColor: backgroundColor}}
    >
    </video>
  );
}

export default VideoPlayer;
