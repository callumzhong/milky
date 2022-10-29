import {
  IcBaselinePhone,
  IonSocialFacebook,
  MdiInstagram,
  MdiTwitter,
  RiLinkedinFill,
} from '@/components/Icon';

const TopBar = () => {
  return (
    <div className='pl-12 flex items-center bg-lunar-green '>
      <div className='flex items-center gap-4 text-white'>
        <span className=''>Follow Us: </span>
        <a href='' className='text-xl'>
          <IonSocialFacebook />
        </a>
        <a href='' className='text-xl'>
          <MdiTwitter />
        </a>
        <a href='' className='text-xl'>
          <RiLinkedinFill />
        </a>
        <a href='' className='text-xl'>
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
