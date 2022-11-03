import serviceImage_1 from '@/assets/images/service-1.jpeg';
import serviceImage_2 from '@/assets/images/service-2.jpeg';
import serviceImage_3 from '@/assets/images/service-3.jpeg';
import TitleSection from '@/components/TitleSection';
import THEME from '../theme';
import Item from './Item';
const data = [
  {
    title: 'Best Animal Selection',
    body: `Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.`,
    banner: serviceImage_1,
  },
  {
    title: 'Breeding & Veterinary',
    body: `Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.`,
    banner: serviceImage_2,
  },
  {
    title: 'Care & Milking',
    body: `Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.`,
    banner: serviceImage_3,
  },
];

const Services = () => {
  return (
    <section className={`py-12 ${THEME.container}`}>
      <div
        data-aos='fade-up'
        className='max-w-lg text-center mx-auto mb-12'
      >
        <TitleSection icon='both' align='center'>
          OUR SERVICES
        </TitleSection>
        <h2 className={THEME.h1}>
          Services That We Offer For Entrepreneurs
        </h2>
      </div>
      <div className='flex flex-wrap -mx-3 pt-20'>
        {data.map((item, idx) => (
          <div
            data-aos='fade-up'
            data-aos-delay={250 + idx * 500}
            key={item.title}
            className='basis-full mb-28 lg:mb-0 lg:basis-1/3 px-3'
          >
            <Item
              banner={item.banner}
              title={item.title}
              body={item.body}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
