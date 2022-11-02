import Button from '@/components/Button';
import THEME from '../theme';

const Carousel = () => {
  return (
    <figure className='relative min-h-[450px] mb-12'>
      <img
        className='block absolute w-full h-full max-w-none md:max-w-full md:h-auto md:static md:w-auto object-cover md:object-contain'
        src='https://source.unsplash.com/random/1920x1080'
      />
      <figcaption className='absolute inset-0 container flex items-center text-white '>
        <div className='basis-2/3 text-right ml-auto px-5'>
          <div className={THEME.h4}>
            Welcome to our dairy farm
          </div>
          <h3
            className={`mb-12 text-white ${THEME['display-1']}`}
          >
            The Farm of Dairy products
          </h3>
          <Button>Explore More</Button>
        </div>
      </figcaption>
    </figure>
  );
};

export default Carousel;
