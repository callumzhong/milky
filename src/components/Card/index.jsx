const BannerCard = ({ banner, children }) => {
  return (
    <div className="group relative flex">
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:rounded-[10px] before:bg-black before:opacity-50 after:absolute after:top-0 after:left-0 after:z-20 after:h-full after:w-full after:bg-white after:duration-500 after:ease-in-out group-hover:after:right-0 group-hover:after:left-auto group-hover:after:w-0">
        <img src={banner} className="rounded-[10px] object-cover" alt="" />
      </div>
      <div className="px-12 pb-12 shadow-[0_0_45px_rgba(0,0,0,0.07)]">
        {children}
      </div>
    </div>
  );
};

const NoBannerCard = ({ children }) => {
  return (
    <div className="rounded-lg p-6 shadow-[0_0_45px_rgba(0,0,0,0.07)]">
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
