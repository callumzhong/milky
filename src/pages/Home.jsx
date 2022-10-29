import About from '@/components/About';
import Album from '@/components/Album';
import Carousel from '@/components/Carousel';
import Copywriting from '@/components/Copywriting';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Team from '@/components/Team';

const HomePage = () => {
  console.log(process.env.NODE_ENV);
  return (
    <>
      <Carousel />
      <About />
      <Features />
      <Copywriting />
      <Services />
      <Album />
      <Products />
      <Team />
    </>
  );
};

export default HomePage;
