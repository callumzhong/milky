import clsx from 'clsx';
import { Link } from 'react-router-dom';
const styles = {
  common:
    'inline-block font-medium text-lunar-green bg-confetti hover:bg-confetti-700 ease-in-out duration-200 rounded-full',
  'size-base': 'px-14 py-4',
  'size-small': 'px-6 py-2',
};

const Button = ({
  to,
  type,
  onClick,
  children,
  size = 'base',
}) => {
  const classes = clsx(
    styles.common,
    styles[`size-${size}`],
  );

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
