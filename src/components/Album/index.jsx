import galleryImage_1 from '@/assets/images/gallery-1.jpeg';
import galleryImage_2 from '@/assets/images/gallery-2.jpeg';
import galleryImage_3 from '@/assets/images/gallery-3.jpeg';
import galleryImage_4 from '@/assets/images/gallery-4.jpeg';
import galleryImage_5 from '@/assets/images/gallery-5.jpeg';
import galleryImage_6 from '@/assets/images/gallery-6.jpeg';
import galleryImage_7 from '@/assets/images/gallery-7.jpeg';
import galleryImage_8 from '@/assets/images/gallery-8.jpeg';
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
            src={galleryImage_5}
            alt=''
          />
        </button>
        <button
          data-aos='fade-up'
          className='block w-full md:w-auto'
        >
          <img
            className='block max-w-none w-full md:max-w-full md:w-auto'
            src={galleryImage_1}
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
            src={galleryImage_2}
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
            src={galleryImage_6}
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
            src={galleryImage_7}
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
            src={galleryImage_3}
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
            src={galleryImage_4}
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
            src={galleryImage_8}
            alt=''
          />
        </button>
      </div>
    </section>
  );
};

export default Album;
