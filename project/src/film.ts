import { APIRoute, AuthorizationStatus } from './const';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;


export const getCorrectAPIRoute = (route: APIRoute, id: number, status = 0) => {
  const filmId = id.toString();
  const statusString = status.toString();
  const filmIdRegExp = /\{filmId\}/gi;
  const statusRegExp = /\{status\}/gi;
  if (route === APIRoute.Similar) {
    return route.replace(filmIdRegExp, filmId);
  }
  if (route === APIRoute.FavoriteStatus) {
    return route.replace(filmIdRegExp, filmId).replace(statusRegExp, statusString);
  }
  return route.concat(filmId);
};

export const getCorrectAppRoute = (route: APIRoute, payload: number | string) => {
  payload = payload.toString();
  let correctRoute = route;
  const filmIdRegExp = /:id/gi;
  if (route === APIRoute.Film) {
    correctRoute = route.replace(filmIdRegExp, payload) as APIRoute;
  }
  return correctRoute;
};
