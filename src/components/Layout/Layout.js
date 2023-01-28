import { Outlet } from 'react-router-dom';
import { AddBar } from 'components/AddBar/AddBar';

export const Layout = () => {
  return (
    <>
      <header>
        <AddBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
