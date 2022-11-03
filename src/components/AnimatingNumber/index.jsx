import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

const colors = {
  white: 'text-white',
  dark: 'text-lunar-green',
};

const AnimatingNumber = ({
  isIntersecting,
  number,
  sec = '1s',
  color = 'white',
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.style.setProperty('--num', number);
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      className={`${styles.number} ${colors[color]}`}
      style={{
        '--sec': sec,
      }}
    ></div>
  );
};

export default AnimatingNumber;
