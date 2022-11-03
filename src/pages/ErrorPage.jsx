import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { TablerAlertTriangle } from '@/components/Icon';
import Layout from './Layout';
const breadcrumbData = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: '404 Page',
  },
];

const ErrorPage = () => {
  return (
    <Layout>
      <Hero>
        <h2
          data-aos='fade-down'
          className='mb-6 text-7xl text-white'
        >
          404 Page
        </h2>
        <Breadcrumb data={breadcrumbData} />
      </Hero>
      <section className='container flex items-center justify-center py-12'>
        <div className='lg:basis-6/12 text-center'>
          <TablerAlertTriangle className='text-hippie-green text-9xl mb-3 mx-auto' />
          <h2 className='text-9xl text-lunar-green'>404</h2>
          <p className='mb-6 text-lunar-green text-4xl'>
            Page Not Found
          </p>
          <p className='mb-6'>
            We’re sorry, the page you have looked for does
            not exist in our website! Maybe go to our home
            page or try to use a search?
          </p>
          <Button to='/'>Go Back To Home</Button>
        </div>
      </section>
    </Layout>
  );
};

export default ErrorPage;
