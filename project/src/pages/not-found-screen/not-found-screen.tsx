import { Link } from 'react-router-dom';
import PageTitle from '../../components/page-title/page-title';
import { Page } from '../../const';
import './not-found-screen.css';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="not-found">
      <PageTitle pageName={Page.NotFound} />
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">This page does not exist.</p>
      <Link to='/' className="not-found__link">Return to the main page</Link>
    </section>
  );
}

export default NotFoundScreen;
