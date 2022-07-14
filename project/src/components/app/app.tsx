import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../consts';
import MainScreen from '../../pages/main-screen/main-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';

type AppScreenProps = {
  cardsCount: number;
  filmName: string;
  filmReleaseDate: string;
  filmGenre: string;
}

function App({cardsCount, filmName, filmReleaseDate, filmGenre}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen
              cardsCount={cardsCount}
              filmName={filmName}
              filmReleaseDate={filmReleaseDate}
              filmGenre={filmGenre}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={<MyListScreen />}
        />
        <Route
          path={AppRoute.DevNotFound}
          element={<NotFoundScreen />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen />}
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
