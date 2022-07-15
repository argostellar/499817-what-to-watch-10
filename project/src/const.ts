export enum AppRoute {
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
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
  AddReview = 'Add review to [Film Name]',
  Player = '[Film Name] Player',
  NotFound = '404',
}
