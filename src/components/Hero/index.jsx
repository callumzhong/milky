import bannerImage from '@/assets/images/banner.jpeg';
const Hero = ({ children }) => {
  return (
    <div
      className='py-12 mb-12 px-3'
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className='container text-center py-12'>
        {children}
      </div>
    </div>
  );
};

export default Hero;
