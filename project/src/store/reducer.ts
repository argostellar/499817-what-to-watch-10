import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, Genre } from '../const';
import { Films } from '../types/film';
import { changeGenre, getGenreFilms, loadFilms, setDataLoadedStatus, resetApp, requireAuthorization, setError } from './action';

type stateType = {
  genre: string;
  films: Films;
  genreFilms: Films;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
};

const initialState: stateType = {
  genre: Genre.ALL,
  films: [],
  genreFilms: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    /*#TODO Необходимо переделать данное действие */
    .addCase(resetApp, (state) => {
      state.genre = Genre.ALL;
      state.films = [];
      state.genreFilms = [];
    });
});

export {reducer};
