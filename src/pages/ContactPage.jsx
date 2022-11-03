import Breadcrumb from '@/components/Breadcrumb';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';

const breadcrumbData = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Contact',
  },
];
const ContactPage = () => {
  return (
    <>
      <Hero>
        <h2
          data-aos='fade-down'
          className='mb-6 text-7xl text-white'
        >
          Contact
        </h2>
        <Breadcrumb data={breadcrumbData} />
      </Hero>
      <Contact />
    </>
  );
};

export default ContactPage;
