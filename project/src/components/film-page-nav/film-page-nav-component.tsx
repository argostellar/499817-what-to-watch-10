import { Tab } from '../../const';
import NavTabLinkComponent from '../nav-tab-link/nav-tab-link-component';

type FilmPageNavComponentProps = {
  activeTab: string;
  moviePageCb: (tabName: string) => void;
}

function FilmPageNavComponent(props: FilmPageNavComponentProps): JSX.Element {
  const { moviePageCb, activeTab } = props;

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <NavTabLinkComponent key={Tab.Overview} activeTab={activeTab} tabName={Tab.Overview} moviePageCb={moviePageCb} />
        <NavTabLinkComponent key={Tab.Details} activeTab={activeTab} tabName={Tab.Details} moviePageCb={moviePageCb} />
        <NavTabLinkComponent key={Tab.Reviews} activeTab={activeTab} tabName={Tab.Reviews} moviePageCb={moviePageCb} />
      </ul>
    </nav>
  );
}

export default FilmPageNavComponent;
