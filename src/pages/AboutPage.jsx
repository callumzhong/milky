import About from '@/components/About';
import Breadcrumb from '@/components/Breadcrumb';
import Copywriting from '@/components/Copywriting';
import Hero from '@/components/Hero';
import Team from '@/components/Team';
const breadcrumbData = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
  },
];

const AboutPage = () => {
  return (
    <>
      <Hero>
        <h2 className='mb-6 text-7xl text-white'>
          About US
        </h2>
        <Breadcrumb data={breadcrumbData} />
      </Hero>
      <About />
      <Copywriting />
      <Team />
    </>
  );
};

export default AboutPage;
