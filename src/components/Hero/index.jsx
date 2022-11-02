const Hero = ({ children }) => {
  return (
    <div className='bg-hero-pattern py-12 mb-12 px-3'>
      <div className='container text-center py-12 text-white'>
        {children}
      </div>
    </div>
  );
};

export default Hero;
