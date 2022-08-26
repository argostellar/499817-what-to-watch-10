import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import {
  loadComments,
  loadCurrentFilm,
  loadFavoriteFilms,
  loadFilms,
  loadSimilarFilms,
  requireAuthorization,
  setDataLoadedStatus,
  setError,
  redirectToRoute,
  setDataSendedStatus
} from './action';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { Film, Films } from '../types/film';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from './';
import { Reviews } from '../types/review';
import { getCorrectAPIRoute } from '../film';
import { UserComment } from '../types/user-comment';
import { FavoriteStatus } from '../types/favorite-status';
import { processErrorHandle } from '../services/process-error-handle';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(APIRoute.Films);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchCurrentFilmAction = createAsyncThunk<void, Film['id'], {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCurrentFilm',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>(getCorrectAPIRoute(APIRoute.Film, id));
    dispatch(setDataLoadedStatus(true));
    dispatch(loadCurrentFilm(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadCurrentFilm(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (_arg, { dispatch, getState, extra: api }) => {
    const { id } = getState().currentFilm;
    const { data } = await api.get<Films>(getCorrectAPIRoute(APIRoute.Similar, id));
    dispatch(setDataLoadedStatus(true));
    dispatch(loadSimilarFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(APIRoute.Favorite);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadFavoriteFilms(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const changeFavoriteFilmsAction = createAsyncThunk<void, FavoriteStatus, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFavoriteFilms',
  async (status, { dispatch, getState, extra: api }) => {
    const { id } = getState().currentFilm;
    const { data } = await api.post<Film>(getCorrectAPIRoute(APIRoute.FavoriteStatus, id, status));
    dispatch(setDataLoadedStatus(true));
    dispatch(loadCurrentFilm(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (_arg, { dispatch, getState, extra: api }) => {
    const { id } = getState().currentFilm;
    const { data } = await api.get<Reviews>(getCorrectAPIRoute(APIRoute.Comments, id));
    dispatch(setDataLoadedStatus(true));
    dispatch(loadComments(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const addCommentAction = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addComment',
  async ({ comment, rating }, { dispatch, getState, extra: api }) => {
    const { id } = getState().currentFilm;
    dispatch(setDataSendedStatus(false));
    try {
      const { data } = await api.post<Reviews>(getCorrectAPIRoute(APIRoute.Comments, id), { comment, rating });
      dispatch(loadComments(data));
      dispatch(setDataSendedStatus(true));
      dispatch(redirectToRoute(getCorrectAPIRoute(APIRoute.Film, id)));
    } catch {
      processErrorHandle('Failed to send review. Please try again.');
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
