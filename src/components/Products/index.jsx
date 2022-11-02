import TitleSection from '@/components/TitleSection';
import THEME from '../theme';
import Item from './Item';

const data = [
  {
    name: 'Pure Milk',
    originalPrice: 29.0,
    specialPrice: 19.0,
    banner: 'https://source.unsplash.com/random/550x550',
  },
  {
    name: 'Fresh Meat',
    originalPrice: 29.0,
    specialPrice: 19.0,
    banner: 'https://source.unsplash.com/random/550x550',
  },
  {
    name: 'Dairy Products',
    originalPrice: 29.0,
    specialPrice: 19.0,
    banner: 'https://source.unsplash.com/random/550x550',
  },
  {
    name: 'Organic Food',
    originalPrice: 29.0,
    specialPrice: 19.0,
    banner: 'https://source.unsplash.com/random/550x550',
  },
];

const Products = () => {
  return (
    <section className={`py-12 ${THEME.container}`}>
      <div className='max-w-lg text-center mx-auto mb-12'>
        <TitleSection icon='both' align='center'>
          OUR PRODUCTS
        </TitleSection>
        <h2 className={THEME.h1}>
          Our Dairy Products For Healthy Living
        </h2>
      </div>
      <div className='flex flex-wrap -mx-3 -mb-6'>
        {data.map((item) => (
          <div
            key={item.name}
            className='basis-full lg:basis-1/3 xl:basis-1/4 px-3 mb-6'
          >
            <Item
              banner={item.banner}
              name={item.name}
              originalPrice={item.originalPrice}
              specialPrice={item.specialPrice}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
