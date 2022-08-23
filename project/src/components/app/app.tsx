import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, BASIC_VALUES } from '../../const';
import { Reviews } from '../../types/review';
import { Films } from '../../types/film';
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

type AppScreenProps = {
  filmName: string;
  filmReleaseDate: string;
  filmGenre: string;
  films: Films;
  reviews: Reviews;
}

function App({ filmName, filmReleaseDate, filmGenre, films, reviews}: AppScreenProps): JSX.Element {
  const { authorizationStatus, isDataLoaded } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <PreloaderScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route
            index
            element={
              <MainScreen
                filmName={filmName}
                filmReleaseDate={filmReleaseDate}
                filmGenre={filmGenre}
              />
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
                <MoviePageScreen
                  films={films}
                  reviews={reviews}
                />
              }
            />
            <Route
              path={AppRoute.AddReview}
              element={
                <PrivateRoute
                  authorizationStatus={authorizationStatus}
                >
                  <AddReviewScreen
                    film={films[0]}
                  />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route
          path={AppRoute.Player}
          element={
            <PlayerScreen currentFilm={BASIC_VALUES.PLACEHOLDER_FILM_NAME} />
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
