import './preloader-screen.css';

function PreloaderScreen(): JSX.Element {
  return (
    <section className="preloader">
      <h1 className="preloader__title">Loading...</h1>
      <div className="preloader__spinner">
        <div className="preloader__spinner-wrap">
          <div className="preloader__spinner-subwrap">
            <div className="preloader__spinner-inner"></div>
            <div className="preloader__spinner-inner"></div>
            <div className="preloader__spinner-inner"></div>
            <div className="preloader__spinner-inner"></div>
          </div>
        </div>
        <div className="preloader__spinner-center"></div>
      </div>
      <p className="preloader__text">Please wait...</p>
    </section>
  );
}

export default PreloaderScreen;
