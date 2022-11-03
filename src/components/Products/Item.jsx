import {
  IconoirLink,
  MaterialSymbolsGardenCartOutline,
} from '@/components/Icon';
import { Link } from 'react-router-dom';
import THEME from '../theme';

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

const Item = ({
  name,
  originalPrice,
  specialPrice,
  banner,
}) => {
  return (
    <div className='group rounded-lg flex flex-col shadow-[0_0_45px_rgba(0,0,0,0.07)]'>
      <div className='relative rounded-t-lg overflow-hidden'>
        <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 ease-in-out duration-500 bg-black bg-opacity-50 gap-2'>
          <button className='p-3 bg-confetti hover:bg-confetti-700 rounded-full translate-y-4 ease-in-out duration-500 group-hover:translate-y-0'>
            <IconoirLink />
          </button>
          <Link className='p-3 bg-confetti hover:bg-confetti-700 rounded-full translate-y-4 ease-in-out duration-500 group-hover:translate-y-0'>
            <MaterialSymbolsGardenCartOutline />
          </Link>
        </div>
        <img src={banner} alt={name} />
      </div>
      <div className='py-4 text-center'>
        <h5 className={`mb-4 ${THEME.h5}`}>{name}</h5>
        <span className='pr-2 text-hippie-green'>
          ${financial(specialPrice)}
        </span>
        <span className='line-through'>
          ${financial(originalPrice)}
        </span>
      </div>
    </div>
  );
};

export default Item;
