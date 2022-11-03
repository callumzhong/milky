import About from '@/components/About';
import Album from '@/components/Album';
import Carousel from '@/components/Carousel';
import Copywriting from '@/components/Copywriting';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Testimonial from '@/components/Testimonial';
import Aos from 'aos';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

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
      <Testimonial />
    </>
  );
};

export default HomePage;
