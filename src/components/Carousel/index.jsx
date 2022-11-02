import Button from '@/components/Button';

const Carousel = () => {
  return (
    <figure className='relative mb-12'>
      <img src='https://source.unsplash.com/random/1920x1080' />
      <figcaption className='absolute inset-0 container flex items-center text-white '>
        <div className='basis-2/3 text-right ml-auto px-5'>
          <div className='text-2xl'>
            Welcome to our dairy farm
          </div>
          <h3 className='text-[5rem] font-bold mb-12 leading-tight text-white'>
            The Farm of Dairy products
          </h3>
          <Button>Explore More</Button>
        </div>
      </figcaption>
    </figure>
  );
};

export default Carousel;
