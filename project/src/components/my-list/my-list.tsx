import { useAppSelector } from '../../hooks';
import FilmList from '../films-list/films-list';

// Компонет-лекало

type MyListProps = {
  someProp?: string;
}

function MyList({someProp}: MyListProps): JSX.Element {
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  return (
    <section className='catalog'>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmList films={favoriteFilms} />
    </section>
  );
}

export default MyList;
