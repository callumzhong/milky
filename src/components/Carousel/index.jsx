import carouselImage_1 from '@/assets/images/carousel-1.jpeg';
import carouselImage_2 from '@/assets/images/carousel-2.jpeg';
import clsx from 'clsx';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../Button';
import {
  CarbonChevronLeft,
  CarbonChevronRight,
} from '../Icon';
import THEME from '../theme';

const Carousel = () => {
  return (
    <section className='relative'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-navigation-size': '25px',
        }}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: '#swiper-hero-prev',
          nextEl: '#swiper-hero-next',
        }}
        autoplay={{
          delay: 5000,
        }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <figure className='relative min-h-[450px] mb-12'>
              <img
                className='block absolute w-full h-full max-w-none md:max-w-full md:h-auto md:static md:w-auto object-cover md:object-contain'
                src={carouselImage_1}
              />
              <figcaption className='absolute inset-0 container px-4 lg:px-20 xl:px-0 flex items-center text-white '>
                <div className='basis-full lg:basis-2/3 mr-auto'>
                  <div className={THEME.h4}>
                    Welcome to our dairy farm
                  </div>
                  <h3
                    className={clsx(
                      `mb-12 text-white ${THEME['display-1']}`,
                      { 'animate-slideInRight': isActive },
                    )}
                  >
                    The Farm of Dairy products
                  </h3>
                  <Button>Explore More</Button>
                </div>
              </figcaption>
            </figure>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <figure className='relative min-h-[450px] mb-12'>
              <img
                className='block absolute w-full h-full max-w-none md:max-w-full md:h-auto md:static md:w-auto object-cover md:object-contain'
                src={carouselImage_2}
              />
              <figcaption className='absolute inset-0 container px-4 lg:px-20 xl:px-0 flex items-center text-white '>
                <div className='basis-full lg:basis-2/3 text-right ml-auto'>
                  <div className={THEME.h4}>
                    Welcome to our dairy farm
                  </div>
                  <h3
                    className={clsx(
                      `mb-12 text-white ${THEME['display-1']}`,
                      { 'animate-slideInRight': isActive },
                    )}
                  >
                    Best Organic Dairy Products
                  </h3>
                  <Button>Explore More</Button>
                </div>
              </figcaption>
            </figure>
          )}
        </SwiperSlide>
      </Swiper>
      <button
        id='swiper-hero-prev'
        className='hidden lg:block disabled:bg-opacity-20 absolute inset-y-0 h-max my-auto left-8 z-10 bg-white ease-in-out duration-500 hover:bg-confetti hover:text-inherit text-confetti rounded-full p-2 text-3xl shadow-[0_0_45px_rgba(0,0,0,0.2)]'
      >
        <CarbonChevronLeft />
      </button>
      <button
        id='swiper-hero-next'
        className='hidden lg:block disabled:bg-opacity-20  absolute inset-y-0 h-max my-auto right-8 z-10 bg-white ease-in-out duration-500 hover:bg-confetti hover:text-inherit text-confetti rounded-full p-2 text-3xl shadow-[0_0_45px_rgba(0,0,0,0.2)]'
      >
        <CarbonChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
