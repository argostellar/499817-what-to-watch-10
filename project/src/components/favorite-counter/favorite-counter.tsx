import { useAppSelector } from '../../hooks';

type FavoriteCounterProps = {
  className: string;
}

function FavoriteCounter({className} : FavoriteCounterProps): JSX.Element {
  const count = useAppSelector((state) => state.favoriteFilms.length);
  return (
    <span className={className}>{count}</span>
  );
}

export default FavoriteCounter;
