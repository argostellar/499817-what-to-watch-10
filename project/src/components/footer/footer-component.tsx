import Logo from '../logo/logo-component';

function Footer(): JSX.Element {
  const footerLogoClass = 'logo__link--light';
  return (
    <footer className="page-footer">
      <Logo extraClass={footerLogoClass} />
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
