import Button from '@/components/Button';

const Copywriting = () => {
  return (
    <section className='py-12 my-12 bg-fixed bg-[url("https://source.unsplash.com/random/1920x1080")]'>
      <div className='container flex gap-6 py-12 text-white'>
        <div className='flex basis-6/12 gap-6'>
          <div className='basis-4/12'>
            <img
              className='rounded-xl'
              src='https://source.unsplash.com/random/400x600'
              alt=''
            />
          </div>
          <div className='basis-8/12 self-center'>
            <h4 className='mb-4 text-3xl text-white'>
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
        <div className='flex basis-6/12 gap-6 '>
          <div className='basis-4/12 text-white'>
            <img
              className='rounded-xl'
              src='https://source.unsplash.com/random/400x600'
              alt=''
            />
          </div>
          <div className='basis-8/12 self-center'>
            <h4 className='mb-4 text-3xl text-white'>
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
    </section>
  );
};

export default Copywriting;
