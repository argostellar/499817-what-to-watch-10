import { createReducer } from '@reduxjs/toolkit';
import { Genre } from '../const';
import { films } from '../mocks/films';
import { Film } from '../types/film';
import { changeGenre, getGenreFilms, resetApp } from './action';

type stateType = {
  genre: string;
  films: Film[];
  genreFilms: Film[];
};

const INITIAL_FILMS = films;

const initialState: stateType = {
  genre: Genre.ALL,
  films: INITIAL_FILMS,
  genreFilms: INITIAL_FILMS,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    /*#QUESTION Зачем действие для получения жанровых фильмов, если жанровые фильмы можно получить опираясь чисто на жанр? */
    .addCase(getGenreFilms, (state, action) => {
      state.genreFilms = action.payload;
    })
    .addCase(resetApp, (state) => {
      state.genre = Genre.ALL;
      state.films = INITIAL_FILMS;
      state.genreFilms = INITIAL_FILMS;
    });
});

export {reducer};
