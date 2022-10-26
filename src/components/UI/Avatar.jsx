import clsx from 'clsx';

const styles = {
  'mode_card-header':
    'w-[140px] h-[140px] -mt-20 mb-12 p-4',
};

const Avatar = ({ mode, src }) => {
  const classes = styles[`mode_${mode}`];

  return (
    <div
      className={clsx(
        'bg-white rounded-full shadow-[0_0_45px_rgba(0,0,0,0.1)]',
        classes,
      )}
    >
      <img
        className='block rounded-full'
        src={src}
        alt=''
      />
    </div>
  );
};

export default Avatar;
