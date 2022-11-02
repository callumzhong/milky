import { SimpleLineIconsMagnifier } from '@/components/Icon';
import { Link } from 'react-router-dom';
import THEME from '../theme';
const Navbar = () => {
  return (
    <div className='flex items-center px-12 py-2'>
      <h1 className={THEME.h1}>Milky</h1>
      <nav className='ml-auto flex flex-col py-[26px] lg:flex-row gap-9 text-[18px] font-medium'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/service'>Services</Link>
        <Link to='/product'>Products</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <button className=''></button>
      <button className='hidden lg:block ml-6 border-l border-gray-500 pl-6'>
        <SimpleLineIconsMagnifier />
      </button>
    </div>
  );
};
export default Navbar;
