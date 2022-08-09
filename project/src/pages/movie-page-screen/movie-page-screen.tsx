// import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RecommendedFilms from '../../components/recommended-films/recommended-films';
import FilmPageNavComponent from '../../components/film-page-nav/film-page-nav-component';
import FilmPageTabs from '../../components/film-page-tabs/film-page-tabs';
import Footer from '../../components/footer/footer-component';
import Logo from '../../components/logo/logo-component';
import PageTitle from '../../components/page-title/page-title-component';
import { Tab } from '../../const';
import { Film } from '../../types/film';
import { Review } from '../../types/review';
// import { AppRoute } from '../../const';
// import Header from '../../components/header/header';

type MoviePageScreenProps = {
  films: Film[];
  reviews: Review[];
}

type MoviePageState = {
  currentTab: string,
  isInMyList: null | boolean,
  // unusedValues?: any,
}

function MoviePageScreen(props: MoviePageScreenProps): JSX.Element {
  const { films } = props;
  const { reviews } = props;
  const currentFilm = films[0];
  const {
    // id,
    name,
    genre,
    releaseDate,
    // videoSrc,
    posterSrc,
  } = currentFilm;

  // const params = useParams();

  // const unusedValues = [id, runTime, videoSrc, reviews];

  const [pageState, setPageState] = useState<MoviePageState>({
    currentTab: Tab.Overview,
    isInMyList: null,
    // unusedValues: unusedValues,
  });

  /*#TODO Установить изначальное состояние страницы */

  const handleTabClick = (tabName: string) => {
    // evt.preventDefault();
    setPageState((prevState) => ({
      ...prevState,
      currentTab: tabName,
    }));
  };

  return (
    <>
      <PageTitle pageName={name} />
      {}
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            {/*#TODO Обновление фона для страницы */}
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          {/* <Header/> */}

          <header className="page-header film-card__head">
            <Logo/>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" href="#TODO">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                {/* #TODO Как правильную дату поставить? Сделать функцию-обработчик для Date? */}
                <span className="film-card__year">{releaseDate as number}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {/* #TODO Как сделать правильный to-атрибут? */}
                <Link to='review' className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterSrc} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmPageNavComponent activeTab={pageState.currentTab} moviePageCb={handleTabClick}/>
              <FilmPageTabs currentTab={pageState.currentTab} currentFilm={currentFilm} reviews={reviews} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <RecommendedFilms films={films} />
        <Footer/>
      </div>
    </>
  );
}

export default MoviePageScreen;
