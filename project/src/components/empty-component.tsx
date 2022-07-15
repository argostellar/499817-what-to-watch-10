import { Fragment } from 'react';

// Компонет-лекало

type EmptyComponentProps = {
  someProp?: string;
}

function EmptyComponent({someProp}: EmptyComponentProps): JSX.Element {
  return (
    <Fragment>
      <h1>This сomponent is empty!</h1>
      <p>Placeholder Text</p>
    </Fragment>
  );
}

export default EmptyComponent;
