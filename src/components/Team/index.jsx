import TitleSection from '@/components/TitleSection';
import Item from './Item';

const data = [
  {
    banner: 'https://source.unsplash.com/random/550x650',
    name: 'Adam Crew',
    job: 'Founder',
  },
  {
    banner: 'https://source.unsplash.com/random/550x650',
    name: 'Adam Crew',
    job: 'Founder',
  },
  {
    banner: 'https://source.unsplash.com/random/550x650',
    name: 'Adam Crew',
    job: 'Founder',
  },
];

const Team = () => {
  return (
    <section className='container py-12'>
      <div className='max-w-lg text-center mx-auto mb-12'>
        <TitleSection icon='both' align='center'>
          OUR TEAM
        </TitleSection>
        <h2 className='text-4xl'>
          Experienced Team Members
        </h2>
      </div>
      <div className='flex -mx-3'>
        {data.map((item) => (
          <div className='basis-1/3 px-3 text-center'>
            <Item
              banner={item.banner}
              job={item.job}
              name={item.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
