import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Organizations from './pages/Organizations';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/organizations', element: <Organizations /> },
  { path: '*', element: <NotFound /> },
]);

export default router;
