import { Link } from 'react-router-dom';
import THEME from '../theme';

const QuickLinks = () => {
  const scrollTopHandler = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <>
      <h5 className={`text-white mb-6 ${THEME.h5}`}>
        Quick Links
      </h5>
      <ul className='flex flex-col gap-2'>
        <li>
          <Link to='/about' onClick={scrollTopHandler}>
            About Us
          </Link>
        </li>
        <li>
          <Link to='/service' onClick={scrollTopHandler}>
            Our Services
          </Link>
        </li>
        <li>
          <Link to='/product' onClick={scrollTopHandler}>
            Our Products
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={scrollTopHandler}>
            Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
};

export default QuickLinks;
