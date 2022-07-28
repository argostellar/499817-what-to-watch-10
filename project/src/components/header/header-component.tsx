import Breadcrumbs from '../breadcrumbs/breadcrumbs-component';
import Logo from '../logo/logo-component';
import UserBlock from '../user-block/user-block-component';

type HeaderProps = {
  isBreadcrumbs?: boolean
}

function Header(props: HeaderProps): JSX.Element {
  const PH_ID = '00';
  const PH_NAME = 'PH NAME';
  const { isBreadcrumbs = false } = props;
  const breadcrumbs = isBreadcrumbs ? <Breadcrumbs id={PH_ID} name={PH_NAME}/> : '';
  // const headerClass = 'page-header film-card__head'; варьируется от страницы к странице
  // const headerTitle = <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>;
  // встречается в MyList
  return (
    <header className="page-header film-card__head">
      <Logo />
      {breadcrumbs}
      <UserBlock/>
    </header>
  );
}

export default Header;
