import { Link } from 'react-router-dom';

type BreadcrumbsProps = {
  id: string | number;
  name: string;
}

function Breadcrumbs(props: BreadcrumbsProps): JSX.Element {
  const { id, name } = props;
  const filmAddress = `/films/${id}`;
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={filmAddress} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to="#">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
