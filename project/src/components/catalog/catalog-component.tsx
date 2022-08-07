import { Film } from '../../types/film';
import FilmListComponent from '../films-list/films-list-component';
import GenresListComponent from '../genres-list/genres-list-component';
import ShowMoreBtnComponent from '../show-more-btn/show-more-component';

type CatalogComponentProps = {
  films: Film[];
}

function CatalogComponent({films}: CatalogComponentProps): JSX.Element {
  return (
    <section className='catalog'>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresListComponent />
      <FilmListComponent films={films} />
      <ShowMoreBtnComponent />
    </section>
  );
}

export default CatalogComponent;
