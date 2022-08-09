import { Film } from '../../types/film';
import FilmList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';

type CatalogProps = {
  films: Film[];
}

function Catalog({films}: CatalogProps): JSX.Element {
  return (
    <section className='catalog'>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmList films={films} />
      <ShowMoreBtn />
    </section>
  );
}

export default Catalog;
