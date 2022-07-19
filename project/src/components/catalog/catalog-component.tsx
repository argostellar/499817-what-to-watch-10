import FilmCardComponent from '../film-card/film-card-component';
import GenresListComponent from '../genres-list/genres-list-component';
import ShowMoreBtnComponent from '../show-more-btn/show-more-component';

type CatalogComponentProps = {
  cardsCount: number;
  isMoreLikeThis: boolean;
  isShowMoreBtnShown: boolean;
}

function CatalogComponent({cardsCount, isMoreLikeThis, isShowMoreBtnShown}: CatalogComponentProps): JSX.Element {
  const catalogClassName = isMoreLikeThis ? 'catalog catalog--like-this' : 'catalog';
  const catalogTitle = isMoreLikeThis ? <h2 className="catalog__title">More like this</h2> : <h2 className="catalog__title visually-hidden">Catalog</h2>;
  return (
    <section className={catalogClassName}>
      {catalogTitle}
      {isMoreLikeThis ? null : <GenresListComponent />}
      <div className="catalog__films-list">
        {Array.from({ length: cardsCount }, FilmCardComponent)}
      </div>
      {isShowMoreBtnShown ? <ShowMoreBtnComponent /> : null}
    </section>
  );
}

export default CatalogComponent;
