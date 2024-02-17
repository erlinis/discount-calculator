import { createBrowserRouter } from 'react-router-dom';
import { Lists } from './app/lists';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Lists />,
  },
]);
