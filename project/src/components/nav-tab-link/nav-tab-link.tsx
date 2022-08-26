import classNames from 'classnames';
import { Link } from 'react-router-dom';

type NavTabLinkProps = {
  activeTab: string;
  tabName: string;
  handleClick: (tabName: string) => void;
}

function NavTabLink(props: NavTabLinkProps): JSX.Element {
  const { activeTab, tabName, handleClick } = props;

  const currentClassName = classNames({ 'film-nav__item': true, 'film-nav__item--active': activeTab === tabName });

  return (
    <li className={currentClassName} tabIndex={0}>
      <Link to={`#${tabName}`} className="film-nav__link" onClick={() => handleClick(tabName)}>{tabName}</Link>
    </li>
  );
}

export default NavTabLink;
