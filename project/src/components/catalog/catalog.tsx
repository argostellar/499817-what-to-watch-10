import { useEffect, useState } from 'react';
import { CARDS_LIST_VALUES, Genre } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getGenreFilms } from '../../store/action';
import { Films } from '../../types/film';
import FilmList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';

type CatalogState = {
  genre: string;
  filmsToRender: Films;
  totalCards: number;
  renderedCards: number;
  isShowMoreBtn: boolean;
}

function Catalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const [catalogState, setCatalogState] = useState<CatalogState>({
    genre: Genre.ALL,
    filmsToRender: [] as Films,
    totalCards: CARDS_LIST_VALUES.NO_CARDS_COUNT,
    renderedCards: CARDS_LIST_VALUES.NO_CARDS_COUNT,
    isShowMoreBtn: false,
  });

  const getFilmsToRender = (films: Films, count: number) => {
    const filmsToRender = films.slice(CARDS_LIST_VALUES.NO_CARDS_COUNT, count);
    return filmsToRender;
  };

  const getCurrentGenreFilms = (films: Films, genre: string) => {
    if (genre === Genre.ALL) {
      return films;
    }
    return films.filter((item) => item.genre === genre);
  };

  const currentGenre = useAppSelector((state) => state.genre);
  const currentFilms = useAppSelector((state) => state.films);
  const currentGenreFilms = useAppSelector((state) => getCurrentGenreFilms(state.films, currentGenre));

  const initCatalog = (films: Films): void => {
    const totalCardsCount = films.length;
    const cardsCount = totalCardsCount > CARDS_LIST_VALUES.CARDS_PER_RENDER
      ? CARDS_LIST_VALUES.CARDS_PER_RENDER
      : totalCardsCount;
    const isBtnShown = totalCardsCount >= CARDS_LIST_VALUES.CARDS_PER_RENDER;
    setCatalogState((prevState) => ({
      ...prevState,
      genre: currentGenre,
      totalCards: totalCardsCount,
      renderedCards: cardsCount,
      isShowMoreBtn: isBtnShown
    }));
  };

  const handleShowMoreBtnClick = () => {
    let btnStatus = true;
    let incrementValue: number = CARDS_LIST_VALUES.CARDS_PER_RENDER;
    let cardsCount: number = CARDS_LIST_VALUES.NO_CARDS_COUNT;
    const diff = catalogState.totalCards - catalogState.renderedCards;

    if (diff > CARDS_LIST_VALUES.CARDS_PER_RENDER) {
      incrementValue = incrementValue > diff ? diff : incrementValue;
      cardsCount = catalogState.renderedCards + incrementValue;
    } else if (diff <= CARDS_LIST_VALUES.CARDS_PER_RENDER) {
      cardsCount = catalogState.totalCards;
      btnStatus = false;
    }
    setCatalogState((prevState) => ({ ...prevState, isShowMoreBtn: btnStatus, renderedCards: cardsCount }));
  };

  useEffect(() => {
    let isNeedUpdate = true;
    setCatalogState((prevState) => ({
      ...prevState,
      filmsToRender: currentGenreFilms,
    }));
    dispatch(getGenreFilms(currentGenreFilms));
    isNeedUpdate && initCatalog(currentGenreFilms);

    return () => {
      isNeedUpdate = false;
    };
  }, [currentGenre, currentFilms]);

  return (
    <section className='catalog'>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmList films={getFilmsToRender(catalogState.filmsToRender, catalogState.renderedCards)} />
      {catalogState.isShowMoreBtn && <ShowMoreBtn handleClick={handleShowMoreBtnClick} />}
    </section>
  );
}

export default Catalog;
