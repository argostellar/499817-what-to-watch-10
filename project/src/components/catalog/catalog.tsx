import { useCurrentGenreFilms } from '../../hooks';
import FilmList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';

function Catalog(): JSX.Element {
  const currentGenreFilms = useCurrentGenreFilms();
  return (
    <section className='catalog'>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmList films={currentGenreFilms} />
      <ShowMoreBtn />
    </section>
  );
}

export default Catalog;
