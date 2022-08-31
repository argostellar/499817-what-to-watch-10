import { Helmet } from 'react-helmet';

type PageTitleProps = {
  pageName: string;
}

function PageTitle({pageName}: PageTitleProps): JSX.Element {
  return (
    <Helmet>
      <title>{`WTW: ${pageName}`}</title>
    </Helmet>
  );
}

export default PageTitle;
