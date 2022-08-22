import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.NoAuth && <Link to="/login" className="user-block__link">Sign in</Link>}
      {
        authorizationStatus === AuthorizationStatus.Auth
        &&
      <>
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to="/"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
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
