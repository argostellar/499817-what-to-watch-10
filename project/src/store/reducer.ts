import { createReducer } from '@reduxjs/toolkit';
import { Genre } from '../const';
import { changeGenre, getCorrespondingGenreFilms, fillFilmsList, resetApp } from './action';

const initialState = {
  genre: Genre.ALL,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state) => {
      state.genre = state.step + STEP_COUNT;
    })
    .addCase(getCorrespondingGenreFilms, (state) => {})
    .addCase(fillFilmsList, (state) => {})
    .addCase(resetApp, (state) => {
      state.genre = Genre.ALL;
    });
});

export {reducer};
