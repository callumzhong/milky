import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import * as icons from './components/Icon';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import ProductPage from './pages/ProductPage';
import ServicePage from './pages/ServicePage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/'
        element={<Layout />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='service' element={<ServicePage />} />
        <Route path='product' element={<ProductPage />} />
        <Route path='contact' element={<ContactPage />} />
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
