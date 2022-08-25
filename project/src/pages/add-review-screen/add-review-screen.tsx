// import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import FilmCardBackground from '../../components/film-card-bg/film-card-bg';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import Logo from '../../components/logo/logo';
import PageTitle from '../../components/page-title/page-title';
import ReviewAddFormComponent from '../../components/review-add-form/review-add-form';
import UserBlock from '../../components/user-block/user-block';
import { Page, PosterSize } from '../../const';
import { useAppSelector } from '../../hooks';

function AddReviewScreen(): JSX.Element {
  const { currentFilm } = useAppSelector((state) => state);
  const { id, name, posterImage, backgroundImage, backgroundColor } = currentFilm;
  const pageName = Page.AddReview + name;
  return (
    <section className="film-card film-card--full" style={{backgroundColor: backgroundColor}}>
      <div className="film-card__header">
        <FilmCardBackground backgroundImage={backgroundImage} name={name} backgroundColor={backgroundColor} />

        <h1 className="visually-hidden">WTW</h1>

        <PageTitle pageName={pageName} />

        <header className="page-header">
          <Logo/>
          <Breadcrumbs id={id} name={name} />
          <UserBlock/>
        </header>

        <FilmCardPoster posterImage={posterImage} name={name} size={PosterSize.SMALL} />
      </div>

      <div className="add-review">
        <ReviewAddFormComponent />
      </div>

    </section>
  );
}

export default AddReviewScreen;
