import { Link } from 'react-router-dom';

function Breadcrumbs(): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="#EMPTY">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
