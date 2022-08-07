import { Fragment } from 'react';
import { Tab } from '../../const';
import { Film } from '../../types/film';
import { Review } from '../../types/review';
import FilmPageDetailsComponent from '../film-page-details/film-page-details-component';
import FilmPageOverviewComponent from '../film-page-overview/film-page-overview-component';
import FilmPageReviewsComponent from '../film-page-reviews/film-page-reviews-component';

type FilmPageTabsProps = {
  currentTab: string;
  currentFilm: Film;
  reviews: Review[];
}

function FilmPageTabs(props: FilmPageTabsProps): JSX.Element {
  const { currentTab, currentFilm, reviews } = props;
  const {
    genre,
    releaseDate,
    runTime,
    ratingTotal,
    description,
    director,
    actors,
    reviewIds,
  } = currentFilm;
  return (
    <Fragment>
      {
        currentTab === Tab.Overview
          ?
          <FilmPageOverviewComponent
            rating={ratingTotal}
            reviewsCount={reviews.length}
            description={description}
            director={director}
            actors={actors}
          />
          :
          null
      }
      {
        currentTab === Tab.Details
          ?
          <FilmPageDetailsComponent
            director={director}
            actors={actors}
            runtime={runTime}
            genre={genre}
            released={releaseDate}
          />
          :
          null
      }
      {
        currentTab === Tab.Reviews
          ?
          <FilmPageReviewsComponent
            reviewIds={reviewIds}
            reviews={reviews}
          />
          :
          null
      }
    </Fragment>
  );
}

export default FilmPageTabs;
