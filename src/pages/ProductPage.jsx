import Breadcrumb from '@/components/Breadcrumb';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Products from '@/components/Products';

const breadcrumbData = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Contact',
  },
];
const ProductPage = () => {
  return (
    <>
      <Hero>
        <h2 className='mb-6 text-7xl text-white'>
          Products
        </h2>
        <Breadcrumb data={breadcrumbData} />
      </Hero>
      <Products />
      <Features />
    </>
  );
};

export default ProductPage;
