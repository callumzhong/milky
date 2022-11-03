import { SimpleLineIconsMagnifier } from '@/components/Icon';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import THEME from '../theme';
import Link from './Link';

const Navbar = () => {
  const [isOpenAnimationScroll, setIsOpenAnimationScroll] =
    useState(false);

  useEffect(() => {
    const scrollCallback = (e) => {
      const value = document.documentElement.scrollTop;
      if (value > 200) {
        setIsOpenAnimationScroll(true);
      } else {
        setIsOpenAnimationScroll(false);
      }
    };
    window.addEventListener(
      'scroll',
      scrollCallback,
      false,
    );
    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  }, []);

  return (
    <div
      className={clsx(
        'flex flex-shrink-0 flex-grow-0 flex-wrap sticky bg-white shadow-[0_0.125rem_0.125rem_rgba(0,0,0,0.08)] z-50 top-0 lg:items-center px-12 py-2 ease-in-out duration-700',
        {
          '-top-[100px]': !isOpenAnimationScroll,
          'top-0': isOpenAnimationScroll,
        },
      )}
    >
      <h1 className={THEME.h1}>Milky</h1>
      <button className='lg:hidden ml-auto'>按鈕</button>
      <nav className='top-0 left-12 inset-y-0 w-full lg:static lg:w-auto lg:ml-auto flex flex-col lg:flex-row gap-9 py-[26px] text-[18px] font-medium'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/service'>Services</Link>
        <Link to='/product'>Products</Link>
        <Link to='/contact'>Contact</Link>
        <button className='hidden lg:block ml-6 border-l border-gray-500 pl-6'>
          <SimpleLineIconsMagnifier />
        </button>
      </nav>
    </div>
  );
};
export default Navbar;
