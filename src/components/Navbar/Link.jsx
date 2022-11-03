import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
const Link = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return clsx(
          'block hover:text-hippie-green py-[10px] lg:py-[26px]',
          {
            'text-hippie-green': isActive,
            'text-lunar-green ': !isActive,
          },
        );
      }}
      end={to === '/' ? true : false}
    >
      {children}
    </NavLink>
  );
};

export default Link;
