import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  CarbonChevronLeft,
  CarbonChevronRight,
  FaQuoteLeft,
} from '../Icon';
import THEME from '../theme';
import TitleSection from '../TitleSection';

const Testimonial = () => {
  return (
    <section className={`py-12 mb-12 ${THEME.container}`}>
      <div
        data-aos='fade-up'
        className='max-w-lg text-center mx-auto mb-12'
      >
        <TitleSection icon='both' align='center'>
          TESTIMONIAL
        </TitleSection>
        <h2 className={THEME.h1}>
          What People Say About Our Dairy Farm
        </h2>
      </div>
      <div
        data-aos='fade-up'
        className='flex flex-wrap -mx-6'
      >
        <div className='relative w-full lg:w-5/12 px-6'>
          <div className='relative min-h-[400px] h-full w-full'>
            <img
              className='absolute top-0 left-0 rounded-full block animate-pulse'
              src='https://source.unsplash.com/random/100x100'
              alt=''
            />
            <img
              className='absolute top-[60%] left-[20%] rounded-full block animate-pulse'
              src='https://source.unsplash.com/random/100x100'
              alt=''
            />
            <img
              className='absolute top-[20%] left-[60%] rounded-full block animate-pulse'
              src='https://source.unsplash.com/random/100x100'
              alt=''
            />
            <img
              className='absolute bottom-0 right-0 rounded-full block animate-pulse'
              src='https://source.unsplash.com/random/100x100'
              alt=''
            />
          </div>

          <FaQuoteLeft className='-z-10 text-gray-200 inset-0 m-auto absolute text-[12.5rem]' />
        </div>
        <div className='w-full mt-12 lg:mt-0 lg:w-7/12 px-6'>
          <Swiper
            style={{
              '--swiper-navigation-color': '#000',
              '--swiper-navigation-size': '25px',
            }}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '#swiper-testimonial-prev',
              nextEl: '#swiper-testimonial-next',
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
                <>
                  <img
                    className='rounded-full block mb-4'
                    src='https://source.unsplash.com/random/100x100'
                    alt=''
                  />
                  <p className={`mb-4 ${THEME.h5}`}>
                    Dolores sed duo clita tempor justo dolor
                    et stet lorem kasd labore dolore lorem
                    ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor
                    erat.
                  </p>
                  <h5 className={`mb-2 ${THEME.h5}`}>
                    Client Name
                  </h5>
                  <p className='text-hippie-green'>
                    Profession
                  </p>
                </>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <>
                  <img
                    className='rounded-full block mb-4'
                    src='https://source.unsplash.com/random/100x100'
                    alt=''
                  />
                  <p className={`mb-4 ${THEME.h5}`}>
                    Dolores sed duo clita tempor justo dolor
                    et stet lorem kasd labore dolore lorem
                    ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor
                    erat.
                  </p>
                  <h5 className={`mb-2 ${THEME.h5}`}>
                    Client Name
                  </h5>
                  <p className='text-hippie-green'>
                    Profession
                  </p>
                </>
              )}
            </SwiperSlide>
          </Swiper>
          <div className='flex mt-8 gap-2'>
            <button
              id='swiper-testimonial-prev'
              className='disabled:shadow-none disabled:bg-transparent disabled:text-inherit  ease-in-out duration-500 hover:bg-confetti hover:text-inherit text-confetti rounded-full p-2 text-lg shadow-[0_0_45px_rgba(0,0,0,0.2)]'
            >
              <CarbonChevronLeft />
            </button>
            <button
              id='swiper-testimonial-next'
              className='disabled:shadow-none disabled:bg-transparent disabled:text-inherit ease-in-out duration-500 hover:bg-confetti hover:text-inherit text-confetti rounded-full p-2 text-lg shadow-[0_0_45px_rgba(0,0,0,0.2)]'
            >
              <CarbonChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
