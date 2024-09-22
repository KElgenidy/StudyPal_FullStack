import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/home',
    element: <ProtectedRoute><Home /></ProtectedRoute>,
  }
]);

export  default router;