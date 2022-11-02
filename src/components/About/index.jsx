import TitleSection from '@/components/TitleSection';
import THEME from '../theme';
import Description from './Description';

const About = () => {
  return (
    <section className={`py-12 ${THEME.container}`}>
      <div className='flex flex-wrap -mx-6'>
        <div className='columns-2 basis-full lg:basis-1/2 gap-2 self-end lg:self-start -mb-2 px-6'>
          <div className='relative'>
            <img
              className='mb-2 opacity-0'
              src='https://source.unsplash.com/random/550x550'
              alt=''
            />
            <div className='bg-confetti absolute h-full w-full top-12 left-12 rounded-md flex flex-col items-center justify-center'>
              <h4 className={THEME['display-1']}>25</h4>
              <small className={`font-bold ${THEME.h5}`}>
                Years Experience
              </small>
            </div>
          </div>
          <img
            className='mb-2 rounded-md'
            src='https://source.unsplash.com/random/550x550'
            alt=''
          />
          <img
            className='mb-2 rounded-md'
            src='https://source.unsplash.com/random/550x550'
            alt=''
          />
          <img
            className='mb-2 rounded-md'
            src='https://source.unsplash.com/random/550x550'
            alt=''
          />
        </div>
        <div className='basis-full lg:basis-1/2 px-6 mt-12 '>
          <TitleSection>About US</TitleSection>
          <Description />
        </div>
      </div>
    </section>
  );
};

export default About;
