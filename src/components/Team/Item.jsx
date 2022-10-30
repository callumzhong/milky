import { Link } from 'react-router-dom';
import Card from '../Card';
import {
  IonSocialFacebook,
  MdiInstagram,
  MdiTwitter,
} from '../Icon';

const Item = ({ banner, name, job }) => {
  return (
    <Card>
      <img
        className='block rounded-lg mb-6'
        src={banner}
        alt=''
      />
      <h5 className='mb-2'>{name}</h5>
      <p className='text-hippie-green mb-4'>{job}</p>
      <div className='flex gap-2 w-max mx-auto'>
        <Link className='ease-in-out duration-500 hover:bg-confetti hover:text-inherit rounded-full text-lg p-2 shadow-[0_0_45px_rgba(0,0,0,0.20)] text-confetti'>
          <IonSocialFacebook />
        </Link>
        <Link className='ease-in-out duration-500 hover:bg-confetti hover:text-inherit rounded-full text-lg p-2 shadow-[0_0_45px_rgba(0,0,0,0.20)] text-confetti'>
          <MdiTwitter />
        </Link>
        <Link className='ease-in-out duration-500 hover:bg-confetti hover:text-inherit rounded-full text-lg p-2 shadow-[0_0_45px_rgba(0,0,0,0.20)] text-confetti'>
          <MdiInstagram />
        </Link>
      </div>
    </Card>
  );
};

export default Item;
