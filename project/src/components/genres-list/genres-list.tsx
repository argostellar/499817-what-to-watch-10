import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';
import { Film } from '../../types/film';

function GenresList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.films);

  /*#QUESTION Что если в строке Genre будет больше одного жанра? Получается будет создана новая вкладка с двумя жанрами */
  const getGenresList = (filmItems: Film[]) => {
    const genresList = filmItems
      .map((film) => film.genre)
      .filter((item, index, array) => array.indexOf(item) === index)
      .sort();
    genresList.unshift('All genres');
    return genresList;
  };
  const setItemClassName = (itemGenre:string) => {
    const itemClassName = itemGenre === currentGenre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item';
    return itemClassName;
  };
  const genres = getGenresList(films);
  const handleGenreClick = (value:string) => {
    dispatch(changeGenre(value));
  };
  return (
    <ul className="catalog__genres-list">
      {genres.map(
        (item) => (
          <li className={setItemClassName(item)} key={item} onClick={() => handleGenreClick(item)}>
            <Link className="catalog__genres-link" to={''}>{item}</Link>
          </li>
        )
      )}
    </ul>
  );
}

export default GenresList;
