import TitleSection from '@/components/TitleSection';
import Description from './Description';

const Features = () => {
  return (
    <section className='container flex gap-6 py-12'>
      <div className='basis-1/2'>
        <TitleSection>WHY US!</TitleSection>
        <Description />
      </div>
      <div className='basis-1/2 flex flex-col'>
        <div className='flex basis-1/2'>
          <div className='basis-1/2 text-center bg-hippie-green flex flex-col py-10 rounded-tl-lg'>
            <img
              className='block mb-8 mx-auto'
              src='https://technext.github.io/milky/img/experience.png'
              alt=''
            />
            <h5 className='text-4xl mb-2 text-white'>25</h5>
            <p className=' text-lg text-confetti'>
              Years Experience
            </p>
          </div>
          <div className='basis-1/2 text-center bg-confetti flex flex-col py-10 rounded-tr-lg'>
            <img
              className='block mb-8 mx-auto'
              src='https://technext.github.io/milky/img/award.png'
              alt=''
            />
            <h5 className='text-4xl mb-2 '>183</h5>
            <p className=' text-lg text-hippie-green font-medium'>
              Award Winning
            </p>
          </div>
        </div>
        <div className='flex basis-1/2'>
          <div className='basis-1/2 text-center bg-confetti flex flex-col py-10 rounded-bl-lg'>
            <img
              className='block mb-8 mx-auto'
              src='https://technext.github.io/milky/img/animal.png'
              alt=''
            />
            <h5 className='text-4xl mb-2'>2619</h5>
            <p className=' text-lg text-hippie-green'>
              Total Animals
            </p>
          </div>
          <div className='basis-1/2 text-center bg-hippie-green flex flex-col py-10 rounded-br-lg'>
            <img
              className='block mb-8 mx-auto'
              src='https://technext.github.io/milky/img/client.png'
              alt=''
            />
            <h5 className='text-4xl mb-2 font-libre text-white'>
              51940
            </h5>
            <p className='text-lg text-confetti font-medium'>
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
