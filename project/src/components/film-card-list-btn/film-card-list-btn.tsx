import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteFilmsAction, fetchFavoriteFilmsAction } from '../../store/api-actions';
import FavoriteCounter from '../favorite-counter/favorite-counter';

function FilmCardListBtn(): JSX.Element {
  const dispatch = useAppDispatch();
  const { authorizationStatus } = useAppSelector((state) => state);
  const { isFavorite } = useAppSelector((state) => state.currentFilm);

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [isFavorite]);

  const handleClick = () => {
    const favoriteStatus = Number(!isFavorite);
    dispatch(changeFavoriteFilmsAction(favoriteStatus));
  };

  const plusIcon = (
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"></use>
    </svg>
  );

  const tickIcon = (
    <svg viewBox="0 0 18 14" width="18" height="14">
      <use xlinkHref="#in-list"></use>
    </svg>
  );

  const authMarkup = (
    <button className="btn btn--list film-card__button" type="button" onClick={handleClick}>
      {isFavorite ? tickIcon : plusIcon}
      <span>My list</span>
      <FavoriteCounter className='film-card__count' />
    </button>
  );

  const noAuthMarkup = (
    <Link to={AppRoute.SignIn} className="btn btn--list film-card__button">
      {plusIcon}
      <span>My list</span>
    </Link>
  );

  const getCorrectMarkup = () => authorizationStatus === AuthorizationStatus.Auth ? authMarkup : noAuthMarkup;

  return getCorrectMarkup();
}

export default FilmCardListBtn;
