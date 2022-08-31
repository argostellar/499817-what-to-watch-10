import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, EmptyUser } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const { authorizationStatus, user } = useAppSelector((state) => state);
  const { avatarUrl, name } = user !== null ? user : EmptyUser;
  const dispatch = useAppDispatch();

  const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.NoAuth && <Link to="/login" className="user-block__link">Sign in</Link>}
      {
        authorizationStatus === AuthorizationStatus.Auth
        &&
      <>
        <li className="user-block__item">
          <Link to={AppRoute.MyList}>
            <div className="user-block__avatar">
              <img src={avatarUrl} alt={`${name} avatar`} title={`${name} favorites`} width="63" height="63" />
            </div>
          </Link>
        </li>
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to="/"
            onClick={handleClick}
          >
            Sign out
          </Link>
        </li>
      </>
      }
    </ul>
  );
}

export default UserBlock;
