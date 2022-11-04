import Copyright from '@/components/Copyright';
import Footer from '@/components/Footer';
import { MaterialSymbolsArrowUpward } from '@/components/Icon';
import Navbar from '@/components/Navbar';
import TopBar from '@/components/TopBar';
import Aos from 'aos';
import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  const mainRef = useRef(null);
  const [isEnableScrollTop, setEnableScrollTop] =
    useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    const callback = () => {
      const height =
        document.querySelector('body').clientHeight;
      const scrollY = window.scrollY;
      const isOpenScrollTop =
        Math.floor((scrollY / height) * 100) > 10;
      if (isOpenScrollTop) {
        setEnableScrollTop(true);
      } else {
        setEnableScrollTop(false);
      }
    };
    window.addEventListener('scroll', callback, false);
    return () => {
      window.removeEventListener('scroll', callback);
    };
  }, []);
  return (
    <>
      <TopBar />
      <Navbar />
      <main ref={mainRef}>{children || <Outlet />}</main>
      <footer className='flex-grow-0 flex-shrink-0 bg-lunar-green mt-12 pt-12'>
        <Footer />
        <Copyright />
      </footer>
      <button
        disabled={!isEnableScrollTop}
        className='fixed bottom-6 right-6 z-10 p-3 rounded-full bg-white text-confetti hover:bg-confetti hover:text-inherit ease-in-out duration-300 disabled:opacity-0 shadow-lg'
        onClick={scrollTopHandler}
      >
        <MaterialSymbolsArrowUpward className='text-2xl' />
      </button>
    </>
  );
};

export default Layout;
