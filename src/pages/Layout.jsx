import Copyright from '@/components/Copyright';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TopBar from '@/components/TopBar';
import { Outlet } from 'react-router-dom';
const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>{children || <Outlet />}</main>
      <footer className='flex-grow-0 flex-shrink-0 bg-lunar-green mt-12 pt-12'>
        <Footer />
        <Copyright />
      </footer>
    </>
  );
};

export default Layout;
