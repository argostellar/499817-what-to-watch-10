import { createAction } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { Film, Films } from '../types/film';
import { Reviews } from '../types/review';
import { UserData } from '../types/user-data';

export const changeGenre = createAction('list/changeGenre', (value) => ({payload: value}));
export const getGenreFilms = createAction('list/getGenreFilms', (value) => ({ payload: value }));
export const resetMainPage = createAction('app/resetMainPage');
export const loadFilms = createAction<Films>('app/loadFilms');
export const loadSimilarFilms = createAction<Films>('film/loadSimilarFilms');
export const loadFavoriteFilms = createAction<Films>('app/loadSimilarFilms');
export const loadCurrentFilm = createAction<Film>('list/loadCurrentFilm');
export const loadPromoFilm = createAction<Film>('app/loadPromoFilm');
export const loadComments = createAction<Reviews>('film/loadComments');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const setDataSendedStatus = createAction<boolean>('data/setDataSendedStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('app/setError');
export const redirectToRoute = createAction<APIRoute | string>('app/redirectToRoute');
export const setUserProfile = createAction<UserData>('user/setUserProfile');
export const removeUserProfile = createAction('user/removeUserProfile');

