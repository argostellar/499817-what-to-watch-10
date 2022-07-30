import CatalogComponent from '../../components/catalog/catalog-component';
import Footer from '../../components/footer/footer-component';
import Logo from '../../components/logo/logo-component';
import PageTitle from '../../components/page-title/page-title-component';
import { Page } from '../../const';
import { Film } from '../../types/film';

type MyListScreenProps = {
  films: Film[];
};

function MyListScreen(props: MyListScreenProps): JSX.Element {
  const { films } = props;
  return (
    <div className="user-page">
      <PageTitle pageName={Page.MyList} />
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href="#EMPTY">Sign out</a>
          </li>
        </ul>
      </header>

      <CatalogComponent films={films} isMoreLikeThis={false} isShowMoreBtnShown={false} />

      <Footer/>
    </div>
  );
}

export default MyListScreen;
