import BusinessHours from './BusinessHours';
import Newsletter from './Newsletter';
import Office from './Office';
import QuickLinks from './QuickLinks';

const Footer = () => {
  return (
    <div className='flex container gap-12 mb-12'>
      <div className='basis-1/4'>
        <Office />
      </div>
      <div className='basis-1/4'>
        <QuickLinks />
      </div>
      <div className='basis-1/4'>
        <BusinessHours />
      </div>
      <div className='basis-1/4'>
        <Newsletter />
      </div>
    </div>
  );
};
export default Footer;
