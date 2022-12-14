import teamImage_1 from '@/assets/images/team-1.jpeg';
import teamImage_2 from '@/assets/images/team-2.jpeg';
import teamImage_3 from '@/assets/images/team-3.jpeg';
import TitleSection from '@/components/TitleSection';
import THEME from '../theme';
import Item from './Item';

const data = [
  {
    banner: teamImage_1,
    name: 'Adam Crew',
    job: 'Founder',
  },
  {
    banner: teamImage_2,
    name: 'Adam Crew',
    job: 'Founder',
  },
  {
    banner: teamImage_3,
    name: 'Adam Crew',
    job: 'Founder',
  },
];

const Team = () => {
  return (
    <section className={`py-12 ${THEME.container}`}>
      <div className='max-w-lg text-center mx-auto mb-12'>
        <TitleSection icon='both' align='center'>
          OUR TEAM
        </TitleSection>
        <h2 className={THEME.h1}>
          Experienced Team Members
        </h2>
      </div>
      <div className='flex flex-wrap -mx-3'>
        {data.map((item, idx) => (
          <div
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay={250 + idx * 500}
            key={idx}
            className='basis-full lg:basis-1/3 px-3 text-center'
          >
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
