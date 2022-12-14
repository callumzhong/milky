import {
  IcBaselinePhone,
  IonSocialFacebook,
  MdiInstagram,
  MdiTwitter,
  RiLinkedinFill,
} from '@/components/Icon';

const TopBar = () => {
  return (
    <div className='pl-12 flex-shrink-0 flex-grow-0 hidden lg:flex items-center bg-lunar-green '>
      <div className='flex items-center gap-4 text-white'>
        <span className=''>Follow Us: </span>
        <a
          href='https://www.facebook.com'
          className='text-xl'
        >
          <IonSocialFacebook />
        </a>
        <a href='https://twitter.com' className='text-xl'>
          <MdiTwitter />
        </a>
        <a
          href='https://www.linkedin.com'
          className='text-xl'
        >
          <RiLinkedinFill />
        </a>
        <a
          href='https://www.instagram.com'
          className='text-xl'
        >
          <MdiInstagram />
        </a>
      </div>
      <div className='flex items-center ml-auto bg-confetti text-lunar-green py-2 px-6'>
        <span className='font-medium mr-2 flex items-center'>
          <IcBaselinePhone className='inline mr-2' />
          Call Us:
        </span>
        <span>+012 345 6789</span>
      </div>
    </div>
  );
};

export default TopBar;
