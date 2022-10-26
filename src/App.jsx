import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/Home';
import Layout from './pages/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      ks
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
