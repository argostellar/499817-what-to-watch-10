import { Film } from '../../types/film';
import FilmListComponent from '../films-list/films-list-component';

type RecommendedFilmsProps = {
  films: Film[];
}

function RecommendedFilms({films}: RecommendedFilmsProps): JSX.Element {
  const sliceOfFilms = films.slice(0, 4);
  return (
    <section className='catalog catalog--like-this'>
      <h2 className="catalog__title">More like this</h2>
      <FilmListComponent films={sliceOfFilms} />
    </section>
  );
}

export default RecommendedFilms;
