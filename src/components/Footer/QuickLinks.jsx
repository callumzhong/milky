import THEME from '../theme';

const QuickLinks = () => {
  return (
    <>
      <h5 className={`text-white mb-6 ${THEME.h5}`}>
        Quick Links
      </h5>
      <ul className='flex flex-col gap-2'>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Our Services</li>
        <li>Terms & Condition</li>
        <li>Support</li>
      </ul>
    </>
  );
};

export default QuickLinks;
