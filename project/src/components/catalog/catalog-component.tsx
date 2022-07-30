import { Film } from '../../types/film';
import FilmListComponent from '../films-list/films-list-component';
import GenresListComponent from '../genres-list/genres-list-component';
import ShowMoreBtnComponent from '../show-more-btn/show-more-component';

type CatalogComponentProps = {
  films: Film[];
  isMoreLikeThis: boolean;
  isShowMoreBtnShown: boolean;
}

function CatalogComponent({films, isMoreLikeThis, isShowMoreBtnShown}: CatalogComponentProps): JSX.Element {
  const catalogClassName = isMoreLikeThis ? 'catalog catalog--like-this' : 'catalog';
  const catalogTitle = isMoreLikeThis ? <h2 className="catalog__title">More like this</h2> : <h2 className="catalog__title visually-hidden">Catalog</h2>;
  return (
    <section className={catalogClassName}>
      {catalogTitle}
      {isMoreLikeThis ? null : <GenresListComponent />}
      <FilmListComponent films={films} />
      {isShowMoreBtnShown ? <ShowMoreBtnComponent /> : null}
    </section>
  );
}

export default CatalogComponent;
