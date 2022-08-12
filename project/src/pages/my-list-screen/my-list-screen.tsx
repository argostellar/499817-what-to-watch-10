import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import PageTitle from '../../components/page-title/page-title';
import UserBlock from '../../components/user-block/user-block';
import { Page } from '../../const';

function MyListScreen(): JSX.Element {
  return (
    <div className="user-page">
      <PageTitle pageName={Page.MyList} />
      <header className="page-header user-page__head">
        <Logo/>
        {/*#MEMO Можно реализовать этот заголовок через паттерн children */}
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <UserBlock/>
      </header>

      <Catalog />

      <Footer/>
    </div>
  );
}

export default MyListScreen;
