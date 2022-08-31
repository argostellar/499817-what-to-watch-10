import { MouseEvent } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';
import { Film } from '../../types/film';

function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.films);

  const SLICE_GENRES_START = 0;
  const SLICE_GENRES_END = 8;

  const getGenresList = (filmItems: Film[]) => {
    const genresList = filmItems
      .map((film) => film.genre)
      .filter((item, index, array) => array.indexOf(item) === index)
      .sort()
      .slice(SLICE_GENRES_START, SLICE_GENRES_END);
    genresList.unshift('All genres');
    return genresList;
  };
  const setItemClassName = (itemGenre: string) => classNames({ 'catalog__genres-item': true, 'catalog__genres-item--active': itemGenre === currentGenre });

  const genres = getGenresList(films);
  const handleGenreClick = (value:string) => (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    dispatch(changeGenre(value));
  };
  return (
    <ul className="catalog__genres-list">
      {genres.map(
        (item) => (
          <li className={setItemClassName(item)} key={item} onClick={handleGenreClick(item)}>
            <Link className="catalog__genres-link" to={''}>{item}</Link>
          </li>
        )
      )}
    </ul>
  );
}

export default GenresList;
