import { NavLink } from 'react-router-dom';

type LogoProps = {
  extraClass?: string
}

function Logo({extraClass} : LogoProps): JSX.Element {
  const logoClass = `logo__link ${extraClass}`;
  return (
    <div className="logo">
      <NavLink to="/" className={logoClass} end>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </NavLink>
    </div>
  );
}

export default Logo;
