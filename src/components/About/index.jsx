import TitleSection from '@/components/UI/TitleSection';
import Description from './Description';

const About = () => {
  return (
    <section className='container flex gap-12 py-12'>
      <div className='columns-2 basis-1/2 gap-2'>
        <div className='relative'>
          <img
            className='mb-2 opacity-0'
            src='https://source.unsplash.com/random/550x550'
            alt=''
          />
          <div className='bg-confetti absolute h-full w-full top-12 left-12 rounded-md flex flex-col items-center justify-center'>
            <h4 className='text-8xl'>25</h4>
            <small className='text-xl font-bold'>
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
      <div className='basis-1/2'>
        <TitleSection>About US</TitleSection>
        <Description />
      </div>
    </section>
  );
};

export default About;
