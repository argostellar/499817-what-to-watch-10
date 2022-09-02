import { MouseEvent } from 'react';
import { APIRoute } from '../../const';
import { getCorrectAPIRoute } from '../../film';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute, setDirectTransfer } from '../../store/action';
import { clearDirectTransferAction } from '../../store/api-actions';
import PlayIcon from '../play-icon/play-icon';

function PlayBtn(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.currentFilm);

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    dispatch(setDirectTransfer(true));
    dispatch(clearDirectTransferAction());
    dispatch(redirectToRoute(getCorrectAPIRoute(APIRoute.Player, id)));
  };

  return (
    <button className="btn btn--play film-card__button" type="button" onClick={handleClick}>
      <PlayIcon />
      <span>Play</span>
    </button>
  );
}

export default PlayBtn;
