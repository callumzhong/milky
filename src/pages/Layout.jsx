import Navbar from '@/components/Navbar';
import TopBar from '@/components/TopBar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
