import TitleSection from '@/components/TitleSection';
import THEME from '../theme';
import Description from './Description';

const Features = () => {
  return (
    <section className={`py-12 ${THEME.container}`}>
      <div className='flex flex-wrap -mx-6'>
        <div className='basis-full lg:basis-1/2 px-6 mb-12'>
          <TitleSection>WHY US!</TitleSection>
          <Description />
        </div>
        <div className='basis-full lg:basis-1/2 px-6'>
          <div className='flex flex-col lg:flex-row basis-1/2'>
            <div className='basis-1/2 text-center bg-hippie-green flex flex-col py-10 rounded-t-lg lg:rounded-tr-none lg:rounded-tl-lg'>
              <img
                className='block mb-8 mx-auto'
                src='https://technext.github.io/milky/img/experience.png'
                alt=''
              />
              <h5 className={`${THEME.h1} mb-2 text-white`}>
                25
              </h5>
              <p className=' text-lg text-confetti'>
                Years Experience
              </p>
            </div>
            <div className='basis-1/2 text-center bg-confetti flex flex-col py-10 lg:rounded-tr-lg'>
              <img
                className='block mb-8 mx-auto'
                src='https://technext.github.io/milky/img/award.png'
                alt=''
              />
              <h5 className={`${THEME.h1} mb-2`}>183</h5>
              <p className=' text-lg text-hippie-green font-medium'>
                Award Winning
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row basis-1/2'>
            <div className='basis-1/2 text-center bg-confetti flex flex-col py-10 lg:rounded-bl-lg'>
              <img
                className='block mb-8 mx-auto'
                src='https://technext.github.io/milky/img/animal.png'
                alt=''
              />
              <h5 className={`${THEME.h1} mb-2`}>2619</h5>
              <p className=' text-lg text-hippie-green'>
                Total Animals
              </p>
            </div>
            <div className='basis-1/2 text-center bg-hippie-green flex flex-col py-10 rounded-b-lg lg:rounded-bl-none lg:rounded-br-lg'>
              <img
                className='block mb-8 mx-auto'
                src='https://technext.github.io/milky/img/client.png'
                alt=''
              />
              <h5 className={`${THEME.h1} mb-2 text-white`}>
                51940
              </h5>
              <p className='text-lg text-confetti font-medium'>
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
