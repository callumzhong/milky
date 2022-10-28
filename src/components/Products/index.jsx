import TitleSection from '@/components/TitleSection';

const Products = () => {
  return (
    <section className='container'>
      <div className='max-w-lg text-center mx-auto mb-12'>
        <TitleSection icon='both' align='center'>
          OUR PRODUCTS
        </TitleSection>
        <h2 className='text-4xl'>
          Our Dairy Products For Healthy Living
        </h2>
      </div>
      <div className='flex -mx-3'>
        <div className='basis-1/4 px-3'>
          <div className='relative rounded-lg flex flex-col'>
            <div className='group-hover:after:w-0 group-hover:after:right-0 group-hover:after:left-auto after:z-20 after:ease-in-out after:duration-500 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white before:z-10 before:bg-black before:opacity-50 before:absolute before:top-0 before:left-0 before:w-full before:h-full absolute inset-0 -z-10 overflow-hidden rounded-lg'>
              <img
                src={
                  'https://source.unsplash.com/random/1920x1080'
                }
                alt=''
              />
            </div>
            <div className='w-max mx-auto'>
              <img
                className='block rounded-t-lg'
                src=''
                alt=''
              />
              <div className='py-4'>
                <h5 className='mb-4'>Pure Milk</h5>
                <span className='pr-2 text-hippie-green line-through'>
                  $19.00
                </span>
                <span className=''>$29.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
