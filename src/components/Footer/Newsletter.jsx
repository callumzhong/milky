import THEME from '../theme';

const Newsletter = () => {
  return (
    <>
      <h5 className={`text-white mb-6 ${THEME.h5}`}>
        Newsletter
      </h5>
      <p className='mb-4'>
        Dolor amet sit justo amet elitr clita ipsum elitr
        est.
      </p>
      <form className=''>
        <div className='relative rounded-lg border'>
          <input
            className='py-4 pl-6 bg-transparent pr-[97px] w-full'
            type='text'
          />
          <button className='block absolute h-max my-auto inset-y-0 right-2 rounded-lg py-2 bg-confetti px-3'>
            SignUp
          </button>
        </div>
      </form>
    </>
  );
};

export default Newsletter;
