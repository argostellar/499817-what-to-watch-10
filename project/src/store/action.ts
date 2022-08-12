import { createAction } from '@reduxjs/toolkit';

/*#MEMO Если действие getGenreFilms загружает фильмы, может лучше назвать getFilms? */
/*#QUESTION Всегда нужно прописывать (value) => ({payload: value}) для действий в которых происходит передача через payload? (TS ругается) */
export const changeGenre = createAction('list/changeGenre', (value) => ({payload: value}));
export const getGenreFilms = createAction('list/getGenreFilms', (value) => ({ payload: value }));
export const resetApp = createAction('app/resetApp');
