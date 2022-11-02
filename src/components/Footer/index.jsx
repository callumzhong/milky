import THEME from '../theme';
import BusinessHours from './BusinessHours';
import Newsletter from './Newsletter';
import Office from './Office';
import QuickLinks from './QuickLinks';

const Footer = () => {
  return (
    <div className={` ${THEME.container} mb-12`}>
      <div className='flex flex-wrap -mx-6'>
        <div className='basis-full px-6 lg:basis-1/4 mb-12'>
          <Office />
        </div>
        <div className='basis-full px-6 lg:basis-1/4 mb-12'>
          <QuickLinks />
        </div>
        <div className='basis-full px-6 lg:basis-1/4 mb-12'>
          <BusinessHours />
        </div>
        <div className='basis-full px-6 lg:basis-1/4'>
          <Newsletter />
        </div>
      </div>
    </div>
  );
};
export default Footer;
