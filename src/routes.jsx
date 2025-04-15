// src/routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PropertySearch from './pages/buyer/PropertySearch';
import ViewProperty from './pages/buyer/ViewProperty';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'search', element: <PropertySearch /> },
      { path: 'property/:id', element: <ViewProperty /> }
    ]
  }
]);