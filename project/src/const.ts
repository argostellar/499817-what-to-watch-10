export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  Film = ':id',
  AddReview = ':id/review',
  Player = '/player/:id',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
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
  RECOMENDED_CARDS_COUNT: 4,
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
} as const;
