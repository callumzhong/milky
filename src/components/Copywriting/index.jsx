import bannerImage_1 from '@/assets/images/banner-1.jpeg';
import bannerImage_2 from '@/assets/images/banner-2.jpeg';
import bannerImage from '@/assets/images/banner.jpeg';
import Button from '@/components/Button';
import THEME from '../theme';
const Copywriting = () => {
  return (
    <section
      className={`py-12 my-12 bg-fixed`}
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div
        className={`py-12 text-white ${THEME.container}`}
      >
        <div className='flex flex-wrap -mx-6 gap-12 lg:gap-0'>
          <div
            data-aos='zoom-in'
            className='flex flex-col lg:flex-row basis-full lg:basis-6/12 gap-6 px-6'
          >
            <div className='basis-4/12'>
              <img
                className='rounded-xl'
                src={bannerImage_1}
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
          <div
            data-aos='zoom-in'
            className='flex flex-col lg:flex-row basis-full lg:basis-6/12 gap-6 px-6'
          >
            <div className='basis-4/12 text-white'>
              <img
                className='rounded-xl'
                src={bannerImage_2}
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
