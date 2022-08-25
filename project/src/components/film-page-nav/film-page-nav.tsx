import { Tab } from '../../const';
import NavTabLink from '../nav-tab-link/nav-tab-link';

type FilmPageNavProps = {
  activeTab: string;
  handleClick: (tabName: string) => void;
}

function FilmPageNav(props: FilmPageNavProps): JSX.Element {
  const { handleClick, activeTab } = props;

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <NavTabLink key={Tab.Overview} activeTab={activeTab} tabName={Tab.Overview} handleClick={handleClick} />
        <NavTabLink key={Tab.Details} activeTab={activeTab} tabName={Tab.Details} handleClick={handleClick} />
        <NavTabLink key={Tab.Reviews} activeTab={activeTab} tabName={Tab.Reviews} handleClick={handleClick} />
      </ul>
    </nav>
  );
}

export default FilmPageNav;
