import { Link } from 'react-router-dom';

type NavTabLinkComponentProps = {
  activeTab: string;
  tabName: string;
  moviePageCb: (tabName: string) => void;
}

function NavTabLinkComponent(props: NavTabLinkComponentProps): JSX.Element {
  const { activeTab, tabName, moviePageCb } = props;

  const defaultClassName = 'film-nav__item';
  const activeClassName = `${defaultClassName} film-nav__item--active`;
  const currentClassName = activeTab === tabName ? activeClassName : defaultClassName;

  return (
    <li className={currentClassName}>
      <Link to={`#${tabName}`} className="film-nav__link" onClick={() => moviePageCb(tabName)}>{tabName}</Link>
    </li>
  );
}

export default NavTabLinkComponent;
