import {Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import Layout from '../layout/layout';
import MainScreen from '../../pages/main-screen/main-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import PreloaderScreen from '../../pages/preloader-screen/preloader-screen';
import { isCheckedAuth } from '../../film';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const { authorizationStatus, isDataLoaded } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <PreloaderScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route
            index
            element={
              <MainScreen />
            }
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <MyListScreen/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.SignIn} element={<SignInScreen />} />
          <Route path={AppRoute.Films}>
            <Route
              path={AppRoute.Film}
              element={
                <MoviePageScreen />
              }
            />
            <Route
              path={AppRoute.AddReview}
              element={
                <PrivateRoute
                  authorizationStatus={authorizationStatus}
                >
                  <AddReviewScreen />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route
          path={AppRoute.Player}
          element={
            <PlayerScreen />
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
