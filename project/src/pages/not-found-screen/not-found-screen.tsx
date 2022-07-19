import { Link } from 'react-router-dom';
import PageTitle from '../../components/page-title/page-title-component';
import { Page } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <PageTitle pageName={Page.NotFound} />
      <h1>404</h1>
      <p>This page does not exist.</p>
      <Link to='/'>Return to the main page.</Link>
    </>
  );
}

export default NotFoundScreen;
