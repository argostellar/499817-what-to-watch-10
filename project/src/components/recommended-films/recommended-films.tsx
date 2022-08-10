import { useCurrentGenreFilms } from '../../hooks';
import FilmList from '../films-list/films-list';

function RecommendedFilms(): JSX.Element {
  /*#MEMO Я реализовал отображение фильмов на основании текущего жанра. Жанр устанавливается при заходе на страницу фильма */
  const films = useCurrentGenreFilms();
  const sliceOfFilms = films.slice(0, 4);
  return (
    <section className='catalog catalog--like-this'>
      <h2 className="catalog__title">More like this</h2>
      <FilmList films={sliceOfFilms} />
    </section>
  );
}

export default RecommendedFilms;
