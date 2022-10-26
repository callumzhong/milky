import SimpleLineIconsMagnifier from '@/components/Icon/SimpleLineIconsMagnifier';
import Link from './Link';
const Navbar = () => {
  return (
    <div className='flex items-center px-12 py-2'>
      <h1 className='text-4xl'>Milky</h1>
      <nav className='ml-auto flex gap-9 text-[18px] font-medium'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/products'>Products</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <button className='ml-6 border-l border-gray-500 pl-6'>
        <SimpleLineIconsMagnifier />
      </button>
    </div>
  );
};

export default Navbar;
