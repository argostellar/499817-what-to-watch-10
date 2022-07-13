import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  cardsCount: number;
  filmName: string;
  filmReleaseDate: string;
  filmGenre: string;
}

function App({cardsCount, filmName, filmReleaseDate, filmGenre}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      cardsCount={cardsCount}
      filmName={filmName}
      filmReleaseDate={filmReleaseDate}
      filmGenre={filmGenre}
    />
  );
}

export default App;
