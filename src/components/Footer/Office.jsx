import { Link } from 'react-router-dom';
import {
  IcBaselinePhone,
  IcRoundEmail,
  IonSocialFacebook,
  MaterialSymbolsLocationOnRounded,
  MdiInstagram,
  MdiTwitter,
  MdiYoutube,
} from '../Icon';

const Office = () => {
  return (
    <>
      <h5 className='text-white'>Our Office</h5>
      <ul className='flex flex-col py-6 gap-2'>
        <li className='flex gap-4 items-center'>
          <MaterialSymbolsLocationOnRounded className='text-lg' />
          123 Street, New York, USA
        </li>
        <li className='flex gap-4 items-center'>
          <IcBaselinePhone className='text-lg' />
          +012 345 67890
        </li>
        <li className='flex gap-4 items-center'>
          <IcRoundEmail className='text-lg' />
          info@example.com
        </li>
      </ul>
      <ul className='flex gap-2 items-center'>
        <li>
          <Link className='block rounded-full text-lunar-green hover:text-black p-2 bg-confetti'>
            <MdiTwitter className='text-lg' />
          </Link>
        </li>
        <li>
          <Link className='block rounded-full text-lunar-green hover:text-black p-2 bg-confetti'>
            <IonSocialFacebook className='text-lg' />
          </Link>
        </li>
        <li>
          <Link className='block rounded-full text-lunar-green hover:text-black p-2 bg-confetti'>
            <MdiYoutube className='text-lg' />
          </Link>
        </li>
        <li>
          <Link className='block rounded-full text-lunar-green hover:text-black p-2 bg-confetti'>
            <MdiInstagram className='text-lg' />
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Office;
