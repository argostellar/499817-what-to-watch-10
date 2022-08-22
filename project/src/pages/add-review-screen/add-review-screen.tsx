// import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Logo from '../../components/logo/logo';
import PageTitle from '../../components/page-title/page-title';
import ReviewAddFormComponent from '../../components/review-add-form/review-add-form';
import UserBlock from '../../components/user-block/user-block';
import { Page } from '../../const';
import { Film } from '../../types/film';
// import Header from '../../components/header/header';

type AddReviewScreenProps = {
  film: Film;
}

function AddReviewScreen({ film }: AddReviewScreenProps): JSX.Element {
  const { id, name } = film;
  const pageName = Page.AddReview + name;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageTitle pageName={pageName} />

        {/* <Header isBreadcrumbs /> */}

        <header className="page-header">
          <Logo/>
          {/* #TODO Как сделать правильную работающую пагинацию? */}
          <Breadcrumbs id={id} name={name} />

          <UserBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewAddFormComponent/>
      </div>

    </section>
  );
}

export default AddReviewScreen;
