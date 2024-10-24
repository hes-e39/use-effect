import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import App from './App';
import './index.css';

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
    },
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
