import { useEffect, useState } from 'react';
import { BASIC_VALUES, Genre } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getGenreFilms } from '../../store/action';
import { Film } from '../../types/film';
import FilmList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';

type CatalogState = {
  genre: string;
  totalCards: number;
  renderedCards: number;
  isShowMoreBtn: boolean;
}
/*#MEMO Реализация отображения новых карточек мне кажется громоздкой */
function Catalog(): JSX.Element {
  const [catalogState, setCatalogState] = useState<CatalogState>({
    genre: Genre.ALL,
    totalCards: BASIC_VALUES.NO_CARDS_COUNT,
    renderedCards: BASIC_VALUES.NO_CARDS_COUNT,
    isShowMoreBtn: false,
  });

  const dispatch = useAppDispatch();

  const allFilms = useAppSelector((state) => state.films);
  const currentGenre = useAppSelector((state) => state.genre);
  const currentGenreFilms = useAppSelector((state) => state.genreFilms);

  /*#MEMO Разобрал кастомный хук на простую функцию, оптимизировал реализацию */
  const getCurrentGenreFilms = (films: Film[], genre: string) => {
    if (genre === Genre.ALL) {
      return films;
    }
    return films.filter((item) => item.genre === genre);
  };

  const initCatalog = (films: Film[]) => {
    const totalCardsCount = films.length;
    const cardsCount = totalCardsCount > BASIC_VALUES.CARDS_PER_RENDER
      ? BASIC_VALUES.CARDS_PER_RENDER
      : totalCardsCount;
    const isBtnShown = totalCardsCount >= BASIC_VALUES.CARDS_PER_RENDER;
    setCatalogState((prevState) => ({
      ...prevState,
      genre: currentGenre,
      totalCards: totalCardsCount,
      renderedCards: cardsCount,
      isShowMoreBtn: isBtnShown
    }));
  };
  /*#MEMO Линтер ругается на подстановку одной переменной. Однако если поставить все запрашиваемые, то линтер начинает ругаться на initCatalog() */
  useEffect(() => {
    const newGenreFilmsList = getCurrentGenreFilms(allFilms, currentGenre);
    dispatch(getGenreFilms(newGenreFilmsList));
    initCatalog(newGenreFilmsList);
  }, [currentGenre]);

  const getFilmsToRender = (films: Film[], count: number) => {
    const filmsToRender = films.slice(BASIC_VALUES.NO_CARDS_COUNT, count);
    return filmsToRender;
  };

  const handleShowMoreBtnClick = () => {
    let btnStatus = true;
    let incrementValue: number = BASIC_VALUES.CARDS_PER_RENDER;
    let cardsCount: number = BASIC_VALUES.NO_CARDS_COUNT;
    const diff = catalogState.totalCards - catalogState.renderedCards;

    if (diff > BASIC_VALUES.CARDS_PER_RENDER) {
      incrementValue = incrementValue > diff ? diff : incrementValue;
      cardsCount = catalogState.renderedCards + incrementValue;
    } else if (diff <= BASIC_VALUES.CARDS_PER_RENDER) {
      cardsCount = catalogState.totalCards;
      btnStatus = false;
    }
    setCatalogState((prevState) => ({ ...prevState, isShowMoreBtn: btnStatus, renderedCards: cardsCount }));
  };

  return (
    <section className='catalog'>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmList films={getFilmsToRender(currentGenreFilms, catalogState.renderedCards)} />
      {catalogState.isShowMoreBtn && <ShowMoreBtn handleClick={handleShowMoreBtnClick} />}
    </section>
  );
}

export default Catalog;
