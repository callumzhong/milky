import TitleSection from '@/components/TitleSection';
import { useEffect, useRef, useState } from 'react';
import AnimatingNumber from '../AnimatingNumber';
import THEME from '../theme';
import Description from './Description';

const Features = () => {
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] =
    useState(false);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5,
      },
    );
    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-aos='fade-up'
      className={`py-12 ${THEME.container}`}
    >
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
              <AnimatingNumber
                color='white'
                number={25}
                isIntersecting={isIntersecting}
              />
              <p className='mt-2 text-lg text-confetti'>
                Years Experience
              </p>
            </div>
            <div className='basis-1/2 text-center bg-confetti flex flex-col py-10 lg:rounded-tr-lg'>
              <img
                className='block mb-8 mx-auto'
                src='https://technext.github.io/milky/img/award.png'
                alt=''
              />
              <AnimatingNumber
                color='dark'
                number={183}
                isIntersecting={isIntersecting}
              />
              <p className=' text-lg mt-2 text-hippie-green font-medium'>
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
              <AnimatingNumber
                color='dark'
                number={2619}
                isIntersecting={isIntersecting}
              />
              <p className=' text-lg mt-2 text-hippie-green'>
                Total Animals
              </p>
            </div>
            <div className='basis-1/2 text-center bg-hippie-green flex flex-col py-10 rounded-b-lg lg:rounded-bl-none lg:rounded-br-lg'>
              <img
                className='block mb-8 mx-auto'
                src='https://technext.github.io/milky/img/client.png'
                alt=''
              />
              <AnimatingNumber
                color='white'
                number={51940}
                isIntersecting={isIntersecting}
              />
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
