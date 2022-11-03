import THEME from '../theme';

const BusinessHours = () => {
  return (
    <>
      <h5 className={`text-white mb-6 ${THEME.h5}`}>
        Business Hours
      </h5>
      <ul>
        <li>
          <p className='mb-1'>Monday - Friday</p>
          <p className='text-white'>09:00 am - 07:00 pm</p>
        </li>
        <li>
          <p className='mb-1'>Saturday</p>
          <p className='text-white'>09:00 am - 12:00 pm</p>
        </li>
        <li>
          <p className='mb-1'>Sunday</p>
          <p className='text-white'>Closed</p>
        </li>
      </ul>
    </>
  );
};

export default BusinessHours;
