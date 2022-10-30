import {
  CarbonChevronLeft,
  CarbonChevronRight,
  FaQuoteLeft,
} from '../Icon';
import TitleSection from '../TitleSection';

const Testimonial = () => {
  return (
    <section className='container  py-12'>
      <div className='max-w-lg text-center mx-auto mb-12'>
        <TitleSection icon='both' align='center'>
          TESTIMONIAL
        </TitleSection>
        <h2 className='text-4xl'>
          What People Say About Our Dairy Farm
        </h2>
      </div>
      <div className='flex -mx-3'>
        <div className='relative basis-5/12 px-3'>
          <img
            className='absolute top-0 left-0 rounded-full block animate-bounce'
            src='https://source.unsplash.com/random/100x100'
            alt=''
          />
          <img
            className='absolute top-8 left-1/2 rounded-full block animate-bounce'
            src='https://source.unsplash.com/random/100x100'
            alt=''
          />

          <FaQuoteLeft className='-z-10 text-gray-200 inset-0 m-auto absolute text-[12.5rem]' />
        </div>
        <div className='basis-7/12 px-3'>
          <div className='outer mb-8'>
            <div className='stage'>
              <div className='item'>
                <img
                  className='rounded-full block mb-4'
                  src='https://source.unsplash.com/random/100x100'
                  alt=''
                />
                <p className='mb-4 text-lg'>
                  Dolores sed duo clita tempor justo dolor
                  et stet lorem kasd labore dolore lorem
                  ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat.
                </p>
                <h5 className='mb-2'>Client Name</h5>
                <p className='text-hippie-green'>
                  Profession
                </p>
              </div>
            </div>
          </div>
          <div className='nav flex gap-2'>
            <button className='ease-in-out duration-500 hover:bg-confetti hover:text-inherit text-confetti rounded-full p-2 text-lg shadow-[0_0_45px_rgba(0,0,0,0.2)]'>
              <CarbonChevronLeft />
            </button>
            <button className='ease-in-out duration-500 hover:bg-confetti hover:text-inherit text-confetti rounded-full p-2 text-lg shadow-[0_0_45px_rgba(0,0,0,0.2)]'>
              <CarbonChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
