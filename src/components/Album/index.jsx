import galleryImage_1 from '@/assets/images/gallery-1.jpeg';
import galleryImage_2 from '@/assets/images/gallery-2.jpeg';
import galleryImage_3 from '@/assets/images/gallery-3.jpeg';
import galleryImage_4 from '@/assets/images/gallery-4.jpeg';
import galleryImage_5 from '@/assets/images/gallery-5.jpeg';
import galleryImage_6 from '@/assets/images/gallery-6.jpeg';
import galleryImage_7 from '@/assets/images/gallery-7.jpeg';
import galleryImage_8 from '@/assets/images/gallery-8.jpeg';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect } from 'react';

import THEME from '../theme';
const data = [
  {
    image: galleryImage_5,
    width: 400,
    height: 300,
  },
  {
    image: galleryImage_1,
    width: 400,
    height: 500,
  },
  {
    image: galleryImage_2,
    width: 400,
    height: 500,
  },
  {
    image: galleryImage_6,
    width: 400,
    height: 300,
  },
  {
    image: galleryImage_7,
    width: 400,
    height: 300,
  },
  {
    image: galleryImage_3,
    width: 400,
    height: 500,
  },
  {
    image: galleryImage_4,
    width: 400,
    height: 500,
  },
  {
    image: galleryImage_8,
    width: 400,
    height: 300,
  },
];
const Album = () => {
  const id = 'A' + Math.floor(Math.random() * 1000) + 1;
  useEffect(() => {
    let lightBox = new PhotoSwipeLightbox({
      gallery: '#' + id,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightBox.init();

    return () => {
      lightBox.destroy();
      lightBox = null;
    };
  }, []);

  return (
    <section className={`my-12 ${THEME['container-2xl']}`}>
      <div
        id={id}
        className='md:columns-2 lg:columns-4 gap-0'
      >
        {data.map((item, idx) => (
          <a
            className='block w-full md:w-auto'
            data-aos='fade-up'
            href={item.image}
            data-pswp-width={item.width}
            data-pswp-height={item.height}
            key={id + '-' + idx}
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='block max-w-none w-full md:max-w-full md:w-auto'
              src={item.image}
              alt=''
            />
          </a>
        ))}
        {/* <button
          data-aos='fade-up'
          className='block w-full md:w-auto'
        ></button>
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
        </button> */}
      </div>
    </section>
  );
};

export default Album;
