import Button from '@/components/Button';

const Legend = ({ src, title, content }) => {
  return (
    <article className='basis-1/2'>
      <img className='block mb-6' src={src} alt='' />
      <h3 className='text-xl mb-4'>{title}</h3>
      <p>{content}</p>
    </article>
  );
};

const Description = () => {
  return (
    <>
      <h2 className='text-4xl mb-6'>
        Know About Our Dairy Farm & Our History
      </h2>
      <p className='mb-6'>
        Tempor erat elitr rebum at clita. Diam dolor diam
        ipsum sit. Aliqu diam amet diam et eos. Clita erat
        ipsum et lorem et sit, sed stet lorem sit clita duo
        justo magna dolore erat amet
      </p>
      <div className='flex gap-16 mb-14'>
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
