import { CARDS_LIST_VALUES } from '../../const';
import { useAppSelector } from '../../hooks';
import FilmList from '../films-list/films-list';

function RecommendedFilms(): JSX.Element {
  const films = useAppSelector((state) => state.similarFilms);
  const sliceOfFilms = films.slice(CARDS_LIST_VALUES.NO_CARDS_COUNT, CARDS_LIST_VALUES.RECOMMENDED_CARDS_COUNT);
  return (
    <section className='catalog catalog--like-this'>
      <h2 className="catalog__title">More like this</h2>
      <FilmList films={sliceOfFilms} />
    </section>
  );
}

export default RecommendedFilms;
