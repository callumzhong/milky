const Carousel = () => {
  return (
    <figure className='relative mb-12'>
      <img src='https://source.unsplash.com/random/1920x1080' />
      <figcaption className='absolute inset-0 container flex items-center text-white'>
        <div className='basis-2/3 text-right ml-auto px-5'>
          <div className='text-2xl'>
            Welcome to our dairy farm
          </div>
          <h3 className='text-[5rem] w-[736px] font-bold mb-12 leading-tight text-white'>
            The Farm of Dairy products
          </h3>
          <a
            href=''
            className='rounded-full inline-block py-4 
             px-14 bg-confetti text-lunar-green font-medium'
          >
            Explore More
          </a>
        </div>
      </figcaption>
    </figure>
  );
};

export default Carousel;
