import {
  MaterialSymbolsMenu,
  SimpleLineIconsMagnifier,
} from '@/components/Icon';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import useCollapse from 'react-collapsed';
import THEME from '../theme';
import Link from './Link';

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  });
  const expandedHandler = () => setExpanded((val) => !val);
  const [isOpenAnimationScroll, setIsOpenAnimationScroll] =
    useState(false);

  useEffect(() => {
    const callback = (e) => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 992) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };
    window.addEventListener('resize', callback, false);
    return () => {
      window.removeEventListener('resize', callback);
    };
  });

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
        'flex flex-shrink-0 flex-grow-0 flex-wrap sticky bg-white shadow-[0_0.125rem_0.125rem_rgba(0,0,0,0.08)] z-50 top-0 items-center px-12 py-2 ease-in-out duration-700',
        {
          '-top-[100px]': !isOpenAnimationScroll,
          'top-0': isOpenAnimationScroll,
        },
      )}
    >
      <h1 className={THEME.h1}>Milky</h1>
      <button
        className='lg:hidden ml-auto border-2 rounded-lg px-3 py-2'
        {...getToggleProps({
          onClick: expandedHandler,
        })}
      >
        <MaterialSymbolsMenu className='text-2xl' />
      </button>
      <div
        className={clsx(
          'basis-full flex-grow items-center lg:basis-auto lg:flex lg:flex-1',
        )}
        {...getCollapseProps()}
      >
        <nav
          className={clsx(
            'border-t lg:border-none mt-2 lg:mt-0 p-6 lg:p-0 lg:ml-auto lg:flex lg:items-center lg:gap-9 text-[18px] font-medium',
          )}
        >
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/service'>Services</Link>
          <Link to='/product'>Products</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <button className='hidden lg:block ml-6 border-l border-gray-500 pl-6'>
          <SimpleLineIconsMagnifier />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
