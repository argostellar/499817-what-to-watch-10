import { Page, PosterSize } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useLayoutEffect } from 'react';
import { fetchPromoFilmAction } from '../../store/api-actions';
import PageTitle from '../../components/page-title/page-title';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import Catalog from '../../components/catalog/catalog';
import UserBlock from '../../components/user-block/user-block';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import FilmCardListBtn from '../../components/film-card-list-btn/film-card-list-btn';
import { resetMainPage } from '../../store/action';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { currentFilm: film } = useAppSelector((state) => state);
  const {
    name,
    genre,
    released,
    backgroundImage,
    backgroundColor,
    posterImage,
  } = film;

  useLayoutEffect(() => {
    dispatch(resetMainPage());
    dispatch(fetchPromoFilmAction());
  }, []);
  return (
    <>
      <PageTitle pageName={Page.Main}/>
      <section className="film-card" style={{ backgroundColor: backgroundColor }}>
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} style={{ backgroundColor: backgroundColor }} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmCardPoster posterImage={posterImage} name={name} size={PosterSize.REGULAR} />

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <FilmCardListBtn />
              </div>
            </div>
          </div>
        </div >
      </section >

      <div className="page-content">
        <Catalog />
        <Footer/>
      </div>
    </>
  );
}

export default MainScreen;
