import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import * as icons from './components/Icon';
import HomePage from './pages/Home';
import Layout from './pages/Layout';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>

      {process.env.NODE_ENV === 'development' && (
        <Route
          path='/icon-preview'
          element={
            <div className='flex flex-wrap gap-2'>
              {Object.values(icons).map((Icon, idx) => (
                <div className='basis-2/12' key={idx}>
                  <span className='text-base'>
                    {Icon.name}
                  </span>
                  <Icon className='ml-4 my-2 text-2xl' />
                </div>
              ))}
            </div>
          }
        />
      )}
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
