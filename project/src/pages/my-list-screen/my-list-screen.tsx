import { useLayoutEffect } from 'react';
import FavoriteCounter from '../../components/favorite-counter/favorite-counter';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import MyList from '../../components/my-list/my-list';
import PageTitle from '../../components/page-title/page-title';
import UserBlock from '../../components/user-block/user-block';
import { Page } from '../../const';
import { useAppDispatch } from '../../hooks';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';

function MyListScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, []);

  return (
    <div className="user-page">
      <PageTitle pageName={Page.MyList} />
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <FavoriteCounter className='user-page__film-count' /></h1>
        <UserBlock/>
      </header>

      <MyList />

      <Footer/>
    </div>
  );
}

export default MyListScreen;
