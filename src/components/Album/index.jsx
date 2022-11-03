import THEME from '../theme';

const Album = () => {
  return (
    <section className={`my-12 ${THEME['container-2xl']}`}>
      <div className='md:columns-2 lg:columns-4 gap-0'>
        <button
          data-aos='fade-up'
          className='block w-full md:w-auto'
        >
          <img
            className='block max-w-none w-full md:max-w-full md:w-auto'
            src='https://source.unsplash.com/random/400x300'
            alt=''
          />
        </button>
        <button
          data-aos='fade-up'
          className='block w-full md:w-auto'
        >
          <img
            className='block max-w-none w-full md:max-w-full md:w-auto'
            src='https://source.unsplash.com/random/400x500'
            alt=''
          />
        </button>
        <button
          data-aos='fade-up'
          data-aos-delay={500}
          className='block w-full md:w-auto'
        >
          <img
            className='block max-w-none w-full md:max-w-full md:w-auto'
            src='https://source.unsplash.com/random/400x500'
            alt=''
          />
        </button>
        <button
          data-aos='fade-up'
          data-aos-delay={500}
          className='block w-full md:w-auto'
        >
          <img
            className='block max-w-none w-full md:max-w-full md:w-auto'
            src='https://source.unsplash.com/random/400x300'
            alt=''
          />
        </button>
        <button
          data-aos='fade-up'
          data-aos-delay={1000}
          className='block w-full md:w-auto'
        >
          <img
            className='block max-w-none w-full md:max-w-full md:w-auto'
            src='https://source.unsplash.com/random/400x300'
            alt=''
          />
        </button>
        <button
          data-aos='fade-up'
          data-aos-delay={1000}
          className='block w-full md:w-auto'
        >
          <img
            className='block max-w-none w-full md:max-w-full md:w-auto'
            src='https://source.unsplash.com/random/400x500'
            alt=''
          />
        </button>
        <button
          data-aos='fade-up'
          data-aos-delay={1500}
          className='block w-full md:w-auto'
        >
          <img
            className='block max-w-none w-full md:max-w-full md:w-auto'
            src='https://source.unsplash.com/random/400x500'
            alt=''
          />
        </button>
        <button
          data-aos='fade-up'
          data-aos-delay={1500}
          className='block w-full md:w-auto'
        >
          <img
            className='block max-w-none w-full md:max-w-full md:w-auto'
            src='https://source.unsplash.com/random/400x300'
            alt=''
          />
        </button>
      </div>
    </section>
  );
};

export default Album;
