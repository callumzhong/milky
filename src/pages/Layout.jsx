import Copyright from '@/components/Copyright';
import Footer from '@/components/Footer';
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
      <footer className='bg-lunar-green pt-12 mx-auto'>
        <Footer />
        <Copyright />
      </footer>
    </>
  );
};

export default Layout;
