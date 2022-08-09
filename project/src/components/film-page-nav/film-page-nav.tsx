import { Tab } from '../../const';
import NavTabLink from '../nav-tab-link/nav-tab-link';

type FilmPageNavProps = {
  activeTab: string;
  moviePageCb: (tabName: string) => void;
}

function FilmPageNav(props: FilmPageNavProps): JSX.Element {
  const { moviePageCb, activeTab } = props;

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <NavTabLink key={Tab.Overview} activeTab={activeTab} tabName={Tab.Overview} moviePageCb={moviePageCb} />
        <NavTabLink key={Tab.Details} activeTab={activeTab} tabName={Tab.Details} moviePageCb={moviePageCb} />
        <NavTabLink key={Tab.Reviews} activeTab={activeTab} tabName={Tab.Reviews} moviePageCb={moviePageCb} />
      </ul>
    </nav>
  );
}

export default FilmPageNav;
