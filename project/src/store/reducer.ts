import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, Genre } from '../const';
import { Film, Films } from '../types/film';
import { Reviews } from '../types/review';
import { UserData } from '../types/user-data';
import {
  changeGenre,
  getGenreFilms,
  loadFilms,
  setDataLoadedStatus,
  resetApp,
  requireAuthorization,
  setError,
  loadCurrentFilm,
  loadSimilarFilms,
  loadFavoriteFilms,
  loadComments,
  resetMainPage,
  setDataSendedStatus,
  setUserProfile,
  removeUserProfile,
} from './action';

type stateType = {
  genre: string;
  films: Films;
  similarFilms: Films;
  favoriteFilms: Films;
  genreFilms: Films;
  currentFilm: Film;
  currentReviews: Reviews;
  isDataLoaded: boolean;
  isDataSended: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  user: UserData | null;
};

const initialState: stateType = {
  genre: Genre.ALL,
  films: [],
  similarFilms: [],
  favoriteFilms: [],
  genreFilms: [],
  currentFilm: {} as Film,
  currentReviews: [],
  isDataLoaded: false,
  isDataSended: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getGenreFilms, (state, action) => {
      state.genreFilms = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(loadCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.currentReviews = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataSendedStatus, (state, action) => {
      state.isDataSended = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserProfile, (state, action) => {
      state.user = action.payload;
    })
    .addCase(removeUserProfile, (state) => {
      state.user = null;
    })
    .addCase(resetMainPage, (state) => {
      state.genre = Genre.ALL;
      state.currentFilm = {} as Film;
      state.genreFilms = [];
    })
    /*#TODO Необходимо переделать данное действие */
    .addCase(resetApp, (state) => {
      state.genre = Genre.ALL;
      state.films = [];
      state.genreFilms = [];
    });
});

export { reducer };
