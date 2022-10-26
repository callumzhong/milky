import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
const Link = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'py-6 text-lunar-green hover:text-hippie-green',
          {
            'text-hippie-green': isActive,
          },
        )
      }
      end={to === '/' ? true : false}
    >
      {children}
    </NavLink>
  );
};

export default Link;
