import Button from '@/components/Button';
import THEME from '../theme';

const Copywriting = () => {
  return (
    <section className='py-12 my-12 bg-fixed bg-[url("https://source.unsplash.com/random/1920x1080")]'>
      <div
        className={`py-12 text-white ${THEME.container}`}
      >
        <div className='flex flex-wrap -mx-6 gap-12 lg:gap-0'>
          <div className='flex flex-col lg:flex-row basis-full lg:basis-6/12 gap-6 px-6'>
            <div className='basis-4/12'>
              <img
                className='rounded-xl'
                src='https://source.unsplash.com/random/400x600'
                alt=''
              />
            </div>
            <div className='basis-8/12 self-center'>
              <h4 className={`mb-4 text-white ${THEME.h2}`}>
                We Sell Best Dairy Products
              </h4>
              <p className='mb-4'>
                Clita erat ipsum et lorem et sit, sed stet
                lorem sit clita duo justo magna dolore erat
                amet
              </p>
              <Button size='small'>Read More</Button>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row basis-full lg:basis-6/12 gap-6 px-6'>
            <div className='basis-4/12 text-white'>
              <img
                className='rounded-xl'
                src='https://source.unsplash.com/random/400x600'
                alt=''
              />
            </div>
            <div className='basis-8/12 self-center'>
              <h4 className={`mb-4 text-white ${THEME.h2}`}>
                We Deliver Fresh Mild Worldwide
              </h4>
              <p className='mb-4'>
                Clita erat ipsum et lorem et sit, sed stet
                lorem sit clita duo justo magna dolore erat
                amet
              </p>
              <Button size='small'>Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copywriting;
