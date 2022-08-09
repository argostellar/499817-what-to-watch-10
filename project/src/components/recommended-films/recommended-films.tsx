import { Film } from '../../types/film';
import FilmList from '../films-list/films-list';

type RecommendedFilmsProps = {
  films: Film[];
}

function RecommendedFilms({films}: RecommendedFilmsProps): JSX.Element {
  const sliceOfFilms = films.slice(0, 4);
  return (
    <section className='catalog catalog--like-this'>
      <h2 className="catalog__title">More like this</h2>
      <FilmList films={sliceOfFilms} />
    </section>
  );
}

export default RecommendedFilms;
