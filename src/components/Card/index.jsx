const BannerCard = ({ banner, children }) => {
  return (
    <div className='group relative flex'>
      <div className='group-hover:after:w-0 group-hover:after:right-0 group-hover:after:left-auto after:z-20 after:ease-in-out after:duration-500 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white before:z-10 before:bg-black before:opacity-50 before:absolute before:top-0 before:left-0 before:w-full before:h-full absolute inset-0 -z-10 before:rounded-[10px] overflow-hidden rounded-lg'>
        <img
          src={banner}
          className='object-cover rounded-[10px]'
          alt=''
        />
      </div>
      <div className='shadow-[0_0_45px_rgba(0,0,0,0.07)] pb-12 px-12'>
        {children}
      </div>
    </div>
  );
};

const NoBannerCard = ({ children }) => {
  return (
    <div className='rounded-lg shadow-[0_0_45px_rgba(0,0,0,0.07)] p-6'>
      {children}
    </div>
  );
};

const Card = ({ banner, children }) => {
  return banner ? (
    <BannerCard banner={banner} children={children} />
  ) : (
    <NoBannerCard children={children} />
  );
};

export default Card;
