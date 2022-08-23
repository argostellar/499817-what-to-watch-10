export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  Film = ':id',
  AddReview = ':id/review',
  Player = '/player/:id',
  Root = '/',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
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
  AddReview = 'Add review to ',
  Player = ' Player',
  NotFound = '404',
}

export const BASIC_VALUES = {
  RECOMMENDED_CARDS_COUNT: 4,
  CARDS_PER_RENDER: 8,
  NO_CARDS_COUNT: 0,
  PLACEHOLDER_FILM_NAME: '[PH] FILM NAME',
  MY_LIST_CARDS_COUNT: 9,
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

export const TIMEOUT_SHOW_ERROR = 3000;
