import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { films } from './mocks/films';
import { reviews } from './mocks/reviews';
import { store } from './store';

const Setting = {
  CARDS_COUNT: 20,
  FILM_NAME: 'The Grand Budapest Hotel',
  FILM_RELEASE_DATE: '2014',
  FILM_GENRE: 'Drama',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cardsCount={Setting.CARDS_COUNT}
        filmName={Setting.FILM_NAME}
        filmReleaseDate={Setting.FILM_RELEASE_DATE}
        filmGenre={Setting.FILM_GENRE}
        films={films}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
