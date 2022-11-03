import Button from '@/components/Button';
import { TypcnTick } from '@/components/Icon';
import AnimatingNumber from '../AnimatingNumber';
import THEME from '../theme';

const Description = () => {
  return (
    <>
      <h2 className={`${THEME.h1} mb-6`}>
        Few Reasons Why People Choosing Us!
      </h2>
      <p className='mb-6'>
        Tempor erat elitr rebum at clita. Diam dolor diam
        ipsum sit. Aliqu diam amet diam et eos. Clita erat
        ipsum et lorem et sit, sed stet lorem sit clita duo
        justo magna dolore erat amet
      </p>
      <ul className='mb-8 flex flex-col gap-3'>
        <li className='flex items-center'>
          <TypcnTick className='text-2xl text-hippie-green mr-4' />
          Justo magna erat amet
        </li>
        <li className='flex items-center'>
          <TypcnTick className='text-2xl text-hippie-green mr-4' />
          Aliqu diam amet diam et eos
        </li>
        <li className='flex items-center'>
          <TypcnTick className='text-2xl text-hippie-green mr-4' />
          Clita erat ipsum et lorem et sit
        </li>
      </ul>
      <Button>Explore More</Button>

      <AnimatingNumber number={99999} />
    </>
  );
};

export default Description;
