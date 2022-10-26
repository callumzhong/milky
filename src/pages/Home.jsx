import About from '@/components/About';
import Carousel from '@/components/Carousel';
import Copywriting from '@/components/Copywriting';
import Features from '@/components/Features';
import Services from '@/components/Services/index';

const HomePage = () => {
  return (
    <>
      <Carousel />
      <About />
      <Features />
      <Copywriting />
      <Services />
      <section className='mb-12'>
        <div className='columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-0'>
          <button>
            <img
              className='inline-block'
              src='https://source.unsplash.com/random/400x300'
              alt=''
            />
          </button>
          <button>
            <img
              className='inline-block'
              src='https://source.unsplash.com/random/400x500'
              alt=''
            />
          </button>
          <button>
            <img
              className='inline-block'
              src='https://source.unsplash.com/random/400x500'
              alt=''
            />
          </button>
          <button>
            <img
              className='inline-block'
              src='https://source.unsplash.com/random/400x300'
              alt=''
            />
          </button>
          <button>
            <img
              className='inline-block'
              src='https://source.unsplash.com/random/400x300'
              alt=''
            />
          </button>
          <button>
            <img
              className='inline-block'
              src='https://source.unsplash.com/random/400x500'
              alt=''
            />
          </button>
          <button>
            <img
              className='inline-block'
              src='https://source.unsplash.com/random/400x500'
              alt=''
            />
          </button>
          <button>
            <img
              className='inline-block'
              src='https://source.unsplash.com/random/400x300'
              alt=''
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
