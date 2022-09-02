import { UserData } from './types/user-data';

export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  Film = ':id',
  AddReview = ':id/review',
  Review = 'review',
  Player = '/player/:id',
  Root = '/',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Film = '/films/',
  Similar = '/films/{filmId}/similar',
  Promo = '/promo',
  Favorite = '/favorite',
  FavoriteStatus = '/favorite/{filmId}/{status}',
  Comments = '/comments/',
  Player = '/player/',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

export enum Page {
  Main = 'Main',
  SignIn = 'Sign In',
  MyList = 'My List',
  Films = 'Films',
  Film = '[Film Name]',
  AddReview = 'Add review to the ',
  Player = 'Now playing',
  NotFound = '404',
}

export const CARDS_LIST_VALUES = {
  RECOMMENDED_CARDS_COUNT: 4,
  CARDS_PER_RENDER: 8,
  NO_CARDS_COUNT: 0,
} as const;

export const GENRE_LIST_VALUES = {
  NO_GENRES_COUNT: 0,
  MAX_GENRES_COUNT: 9,
} as const;

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const FILM_CARD_VALUES = {
  WIDTH: 280,
  HEIGHT: 175,
  PREVIEW_TIMEOUT: 1000,
} as const;

export const Genre = {
  ALL: 'All genres',
  NONE: 'None',
} as const;

export const HumanizedRating = {
  NONE: 'None',
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
} as const;

export const DigitalRating = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10,
} as const;

export const SignInMessage = {
  EMAIL: 'Please enter a valid email address',
  PASSWORD: 'Please enter a valid password',
  UNRECOGNIZED: 'We can’t recognize this email and password combination.Please try again.',
} as const;

export const PosterSize = {
  SMALL: 'film-card__poster--small',
  BIG: 'film-card__poster--big',
  REGULAR: '',
} as const;

export const ReviewTextareaSize = {
  MIN: 50,
  MAX: 400,
} as const;

export const ReviewRating = {
  NONE: 0,
  MIN: 1,
  DEFAULT: 8,
  MAX: 10,
} as const;

export const EmptyUser: UserData = {
  avatarUrl: 'img/avatar.jpg',
  email: '0',
  id: 0,
  name: 'User',
  token: '0',
} as const;

export const TIMEOUT_SHOW_ERROR = 3000;
export const TIMEOUT_DIRECT_TRANSFER = 1000;

export const PROGRESS_BAR_MAX_VALUE = 100;

export const TimeUnit = {
  NEXT_ORDER: 60,
  TEN: 10,
  ZERO: 0,
} as const;
