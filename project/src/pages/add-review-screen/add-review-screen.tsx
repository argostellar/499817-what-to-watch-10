// import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs-component';
import Logo from '../../components/logo/logo-component';
import PageTitle from '../../components/page-title/page-title-component';
import ReviewAddFormComponent from '../../components/review-add-form/review-add-form-component';
import { Page } from '../../const';
import { Film } from '../../types/film';
// import Header from '../../components/header/header';

type AddReviewScreenProps = {
  films: Film[];
}

function AddReviewScreen(props: AddReviewScreenProps): JSX.Element {
  const { films } = props;
  const currentFilm = films[0];
  const { id, name } = currentFilm;
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

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="#TODO">Sign out</a>
            </li>
          </ul>
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
