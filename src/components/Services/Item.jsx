import BiChevronDoubleRight from '@/components/Icon/BiChevronDoubleRight';
import Avatar from '@/components/UI/Avatar';
import Card from '@/components/UI/Card';
import { Link } from 'react-router-dom';

const Item = ({ title, banner, body }) => {
  return (
    <Card banner={banner}>
      <Avatar mode='card-header' src={banner} />
      <h5 className='mb-4 group-hover:text-white ease-in-out duration-500'>
        {title}
      </h5>
      <p className='mb-6 group-hover:text-white ease-in-out duration-500'>
        {body}
      </p>
      <Link className='bg-white text-confetti inline-block p-3 rounded-full shadow-[0_0_45px_rgba(0,0,0,0.25)]'>
        <BiChevronDoubleRight />
      </Link>
    </Card>
  );
};

export default Item;
