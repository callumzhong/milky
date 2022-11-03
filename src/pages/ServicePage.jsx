import Breadcrumb from '@/components/Breadcrumb';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

const breadcrumbData = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Contact',
  },
];
const ServicePage = () => {
  return (
    <>
      <Hero>
        <h2
          data-aos='fade-down'
          className='mb-6 text-7xl text-white'
        >
          Services
        </h2>
        <Breadcrumb data={breadcrumbData} />
      </Hero>
      <Services />
      <Features />
    </>
  );
};

export default ServicePage;
