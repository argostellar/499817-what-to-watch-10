import { createReducer } from '@reduxjs/toolkit';
import { Genre } from '../const';
import { films } from '../mocks/films';
import { Films } from '../types/film';
import { changeGenre, getGenreFilms, loadFilms, setDataLoadedStatus, resetApp } from './action';

type stateType = {
  genre: string;
  films: Films;
  genreFilms: Films;
  isDataLoaded: boolean;
};

const INITIAL_FILMS = films;

const initialState: stateType = {
  genre: Genre.ALL,
  films: [],
  genreFilms: INITIAL_FILMS,
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getGenreFilms, (state, action) => {
      state.genreFilms = action.payload;
    })
    /*#TODO Необходимо переделать данное действие */
    .addCase(resetApp, (state) => {
      state.genre = Genre.ALL;
      state.films = INITIAL_FILMS;
      state.genreFilms = INITIAL_FILMS;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export {reducer};
