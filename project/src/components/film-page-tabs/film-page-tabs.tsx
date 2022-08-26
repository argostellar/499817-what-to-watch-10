import { Fragment } from 'react';
import { Tab } from '../../const';
import { useAppSelector } from '../../hooks';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';

type FilmPageTabsProps = {
  currentTab: string;
}

function FilmPageTabs(props: FilmPageTabsProps): JSX.Element {
  const { currentFilm, currentReviews: reviews } = useAppSelector((state) => state);
  const { currentTab } = props;
  const {
    genre,
    released,
    runTime,
    rating,
    description,
    director,
    starring,
    scoresCount,
  } = currentFilm;
  return (
    <Fragment>
      {
        currentTab === Tab.Overview
          ?
          <FilmPageOverview
            rating={rating}
            reviewsCount={scoresCount}
            description={description}
            director={director}
            actors={starring}
          />
          :
          null
      }
      {
        currentTab === Tab.Details
          ?
          <FilmPageDetails
            director={director}
            actors={starring}
            runtime={runTime}
            genre={genre}
            released={released}
          />
          :
          null
      }
      {
        currentTab === Tab.Reviews
          ?
          <FilmPageReviews
            reviews={reviews}
          />
          :
          null
      }
    </Fragment>
  );
}

export default FilmPageTabs;
