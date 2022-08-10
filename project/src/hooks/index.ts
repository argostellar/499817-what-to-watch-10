import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Genre } from '../const';
import type { State, AppDispatch } from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

/*#QUESTION Правильно ли было вынести переиспользуемый код в хук? Хук ниже корректен? */
export const useCurrentGenreFilms = () => {
  const films = useAppSelector((state) => state.films);
  const genre = useAppSelector((state) => state.genre);
  if (genre !== Genre.ALL) {
    return films.filter((item) => item.genre === genre);
  }
  return films;
};
