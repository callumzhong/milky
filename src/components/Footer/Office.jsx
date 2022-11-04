import {
  IcBaselinePhone,
  IcRoundEmail,
  IonSocialFacebook,
  MaterialSymbolsLocationOnRounded,
  MdiInstagram,
  MdiTwitter,
  MdiYoutube,
} from '../Icon';
import THEME from '../theme';

const Office = () => {
  return (
    <>
      <h5 className={`text-white ${THEME.h5}`}>
        Our Office
      </h5>
      <ul className='flex flex-col py-6 gap-2'>
        <li className='flex gap-3 items-center'>
          <MaterialSymbolsLocationOnRounded className=' self-start text-xl' />
          123 Street, New York, USA
        </li>
        <li className='flex gap-4 items-center'>
          <IcBaselinePhone className='text-lg self-start' />
          +012 345 67890
        </li>
        <li className='flex gap-4 items-center'>
          <IcRoundEmail className='text-lg self-start' />
          info@example.com
        </li>
      </ul>
      <ul className='flex gap-2 items-center'>
        <li>
          <a
            href='https://twitter.com'
            className='block rounded-full text-lunar-green hover:text-black p-2 bg-confetti'
          >
            <MdiTwitter className='text-lg' />
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com'
            className='block rounded-full text-lunar-green hover:text-black p-2 bg-confetti'
          >
            <IonSocialFacebook className='text-lg' />
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com'
            className='block rounded-full text-lunar-green hover:text-black p-2 bg-confetti'
          >
            <MdiYoutube className='text-lg' />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com'
            className='block rounded-full text-lunar-green hover:text-black p-2 bg-confetti'
          >
            <MdiInstagram className='text-lg' />
          </a>
        </li>
      </ul>
    </>
  );
};
export default Office;
