import TitleSection from '@/components/TitleSection';
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
    <section className='container py-12'>
      <div className='max-w-lg text-center mx-auto mb-12'>
        <TitleSection icon='both' align='center'>
          OUR PRODUCTS
        </TitleSection>
        <h2 className='text-4xl'>
          Our Dairy Products For Healthy Living
        </h2> 
      </div>
      <div className='flex -mx-3'>
        {data.map((item) => (
          <div key={item.name} className='basis-1/4 px-3'>
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
