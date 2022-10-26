import TitleSection from '@/components/UI/TitleSection';
import Item from './Item';

const data = [
  {
    title: 'Best Animal Selection',
    body: `Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.`,
    banner: 'https://source.unsplash.com/random/550x550',
  },
  {
    title: 'Breeding & Veterinary',
    body: `Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.`,
    banner: 'https://source.unsplash.com/random/550x550',
  },
  {
    title: 'Care & Milking',
    body: `Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.`,
    banner: 'https://source.unsplash.com/random/550x550',
  },
];

const Services = () => {
  return (
    <section className='py-12 container'>
      <div className='max-w-lg text-center mx-auto mb-12'>
        <TitleSection icon='both' align='center'>
          OUR SERVICES
        </TitleSection>
        <h2 className='text-4xl'>
          Services That We Offer For Entrepreneurs
        </h2>
      </div>
      <div className='flex flex-wrap -mx-3 pt-20'>
        {data.map((item) => (
          <div className='basis-1/3 px-3'>
            <Item
              key={item.title}
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
