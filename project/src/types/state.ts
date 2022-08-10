import { store } from '../store/index.js';

export type State = ReturnType<typeof store.getState>;

/*#QUESTION Не совсем понимаю необходимость в типизации dispatch */
export type AppDispatch = typeof store.dispatch;
