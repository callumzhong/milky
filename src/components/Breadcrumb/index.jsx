import clsx from 'clsx';
import { Link } from 'react-router-dom';
const Breadcrumb = ({ data }) => {
  return (
    <ul className='flex justify-center text-[1.125rem]'>
      {data.map((item, idx) => (
        <li
          className={clsx({
            'before:content-["/"] before:inline-block before:px-2':
              0 < idx,
          })}
        >
          {item.path ? (
            <Link to={item.path}>{item.name}</Link>
          ) : (
            <span>{item.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
