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
                path: 'login', // Removed the leading slash
                element: <Login />,
            },
            {
                path: 'bookmarks',
                element: <BookmarksPage />,
            },
            {
                path: 'bookmarks/:id',
                element: <BookmarkDetail />,
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
