import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecommendedFilms from '../../components/recommended-films/recommended-films';
import FilmPageNavComponent from '../../components/film-page-nav/film-page-nav';
import FilmPageTabs from '../../components/film-page-tabs/film-page-tabs';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import PageTitle from '../../components/page-title/page-title';
import { AppRoute, AuthorizationStatus, PosterSize, Tab } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import UserBlock from '../../components/user-block/user-block';
import FilmCardListBtn from '../../components/film-card-list-btn/film-card-list-btn';
import { fetchCommentsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import FilmCardBackground from '../../components/film-card-bg/film-card-bg';
import { changeGenre } from '../../store/action';

type MoviePageState = {
  currentTab: string,
  isInMyList: null | boolean,
}

function MoviePageScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const { authorizationStatus } = useAppSelector((state) => state);
  const { currentFilm } = useAppSelector((state) => state);

  const {
    name,
    genre,
    released,
    posterImage,
    backgroundImage,
    backgroundColor,
  } = currentFilm;

  useLayoutEffect(() => {
    dispatch(changeGenre(genre));
    dispatch(fetchSimilarFilmsAction());
    dispatch(fetchCommentsAction());
  }, [currentFilm]);

  const [pageState, setPageState] = useState<MoviePageState>({
    currentTab: Tab.Overview,
    isInMyList: null,
  });

  const handleTabClick = (tabName: string) => {
    setPageState((prevState) => ({
      ...prevState,
      currentTab: tabName,
    }));
  };

  return (
    <>
      <PageTitle pageName={name} />
      {}
      <section className="film-card film-card--full" style={{ backgroundColor: backgroundColor }}>
        <div className="film-card__hero">
          <FilmCardBackground backgroundImage={backgroundImage} name={name} backgroundColor={backgroundColor} />

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
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
                {authorizationStatus === AuthorizationStatus.Auth && <Link to={AppRoute.Review} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmCardPoster posterImage={posterImage} name={name} size={PosterSize.BIG} />

            <div className="film-card__desc">
              <FilmPageNavComponent activeTab={pageState.currentTab} handleClick={handleTabClick}/>
              <FilmPageTabs currentTab={pageState.currentTab} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <RecommendedFilms />
        <Footer/>
      </div>
    </>
  );
}

export default MoviePageScreen;
