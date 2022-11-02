import Button from '@/components/Button';
import THEME from '../theme';

const Legend = ({ src, title, content }) => {
  return (
    <article className='basis-full lg:basis-1/2 px-6'>
      <img className='block mb-6' src={src} alt='' />
      <h3 className={`mb-4 ${THEME.h4}`}>{title}</h3>
      <p>{content}</p>
    </article>
  );
};

const Description = () => {
  return (
    <>
      <h2 className={`${THEME.h1} mb-6`}>
        Know About Our Dairy Farm & Our History
      </h2>
      <p className='mb-6'>
        Tempor erat elitr rebum at clita. Diam dolor diam
        ipsum sit. Aliqu diam amet diam et eos. Clita erat
        ipsum et lorem et sit, sed stet lorem sit clita duo
        justo magna dolore erat amet
      </p>
      <div className='flex flex-wrap -mx-6 mb-14'>
        <Legend
          src='https://technext.github.io/milky/img/service.png'
          title='Dedicated Services'
          content='Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita'
        />
        <Legend
          src='https://technext.github.io/milky/img/product.png'
          title='Organic Products'
          content='Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita'
        />
      </div>
      <Button>Explore More</Button>
    </>
  );
};

export default Description;
