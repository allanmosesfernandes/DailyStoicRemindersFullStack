import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '@/routes/login.jsx';
import RegistrationForm from '@/routes/register.jsx';
import Register from '@/routes/register.jsx'; // Consider removing if redundant
import Layout from './components/layouts/layout.jsx';
import HomePage from '@/routes/homepage.jsx';
import AuthProvider from './context/AuthContext';
import BookmarksPage from './components/bookmarksPage';
import BookmarkDetail from './components/bookmarks-details';
import ProtectedRoute from './routes/protectedRoute';
import About from './routes/about';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true, // Use index instead of path '/'
                element: <HomePage />,
            },
            {
                path: 'register', // Removed the leading slash
                element: <Register />,
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'login', // Removed the leading slash
                element: <Login />,
            },
            // Wrap the bookmarks routes in the ProtectedRoute component
            {
                path: 'bookmarks',
                element: <ProtectedRoute />, // Use ProtectedRoute as the parent route
                children: [
                    {
                        index: true, // The main /bookmarks path
                        element: <BookmarksPage />,
                    },
                    {
                        path: ':id', // The /bookmarks/:id path for individual bookmarks
                        element: <BookmarkDetail />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
