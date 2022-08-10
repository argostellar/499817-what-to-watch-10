import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('list/changeGenre');
export const getCorrespondingGenreFilms = createAction('getCorrespondingGenreFilms');
export const fillFilmsList = createAction('fillFilmsList');
export const resetApp = createAction('app/resetApp');
