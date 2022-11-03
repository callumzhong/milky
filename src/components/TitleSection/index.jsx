import clsx from 'clsx';

const styles = {
  'align-left': 'mr-auto',
  'align-center': 'mx-auto',
  'align-right': 'ml-auto',
};
const TitleSection = ({
  children,
  icon = 'right',
  align,
}) => {
  return (
    <div
      className={clsx(
        'mb-4 flex gap-4 w-max',
        styles[`align-${align}`],
      )}
    >
      {(icon === 'left' || icon === 'both') && (
        <div className='w-[60px] relative'>
          <div className='absolute right-0 top-[2px] w-2/3 h-[2px] bg-hippie-green'></div>
          <div className='absolute bottom-[5px] inset-x-0 h-[2px] bg-hippie-green'></div>
        </div>
      )}
      <h6 className='font-body text-hippie-green font-semibold uppercase'>
        {children}
      </h6>
      {(icon === 'right' || icon === 'both') && (
        <div className='w-[60px] relative'>
          <div className='absolute top-[2px] w-2/3 h-[2px] bg-hippie-green'></div>
          <div className='absolute bottom-[5px] inset-x-0 h-[2px] bg-hippie-green'></div>
        </div>
      )}
    </div>
  );
};

export default TitleSection;
