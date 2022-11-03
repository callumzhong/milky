import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
const Link = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return clsx('hover:text-hippie-green', {
          'text-hippie-green': isActive,
          'text-lunar-green ': !isActive,
        });
      }}
      end={to === '/' ? true : false}
    >
      {children}
    </NavLink>
  );
};

export default Link;
