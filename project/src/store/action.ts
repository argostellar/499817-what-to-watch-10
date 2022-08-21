import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film';

/*#MEMO Если действие getGenreFilms загружает фильмы, может лучше назвать getFilms? */

export const changeGenre = createAction('list/changeGenre', (value) => ({payload: value}));
export const getGenreFilms = createAction('list/getGenreFilms', (value) => ({ payload: value }));
export const resetApp = createAction('app/resetApp');
export const loadFilms = createAction<Films>('app/loadFilms');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

/*#QUESTION Как правильно наименовывать префиксы для действий (app/, data/, list/)? */
