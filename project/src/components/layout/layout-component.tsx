import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import SvgSprite from '../svg-sprite/svg-sprite-component';

// Данный компонент не подключен, используется как образец компонента Layout

function Layout(): JSX.Element {
  return (
    <Fragment>
      <SvgSprite/>
      <Outlet />
    </Fragment>
  );
}

export default Layout;
