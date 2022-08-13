import { BASIC_VALUES } from '../../const';
import { useAppSelector } from '../../hooks';
import FilmList from '../films-list/films-list';

function RecommendedFilms(): JSX.Element {
  /*#MEMO Я реализовал отображение фильмов на основании текущего жанра. Жанр устанавливается при заходе на страницу фильма */
  const films = useAppSelector((state) => state.genreFilms);
  const sliceOfFilms = films.slice(BASIC_VALUES.NO_CARDS_COUNT, BASIC_VALUES.RECOMMENDED_CARDS_COUNT);
  return (
    <section className='catalog catalog--like-this'>
      <h2 className="catalog__title">More like this</h2>
      <FilmList films={sliceOfFilms} />
    </section>
  );
}

export default RecommendedFilms;
