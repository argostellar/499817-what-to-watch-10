import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Films } from '../types/film';

export const changeGenre = createAction('list/changeGenre', (value) => ({payload: value}));
export const getGenreFilms = createAction('list/getGenreFilms', (value) => ({ payload: value }));
export const resetApp = createAction('app/resetApp');
export const loadFilms = createAction<Films>('app/loadFilms');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('app/setError');

