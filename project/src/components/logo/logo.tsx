import { Link } from 'react-router-dom';

type LogoProps = {
  isFooter?: boolean
}

function Logo({isFooter = false} : LogoProps): JSX.Element {
  const logoClass = isFooter ? 'logo__link logo__link--light' : 'logo__link';
  return (
    <div className="logo">
      <Link to="/" className={logoClass}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
