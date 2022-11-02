import Copyright from '@/components/Copyright';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TopBar from '@/components/TopBar';
import { Outlet } from 'react-router-dom';
const Layout = ({ children, ...props }) => {
  console.log(children, props);
  return (
    <>
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main>{children || <Outlet />}</main>
      <footer className='bg-lunar-green mt-12 pt-12'>
        <Footer />
        <Copyright />
      </footer>
    </>
  );
};

export default Layout;
