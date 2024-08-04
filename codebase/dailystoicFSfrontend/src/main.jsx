import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "@/routes/login.jsx";
import RegistrationForm from "@/routes/register.jsx";
import Register from "@/routes/register.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Homepage</div>,  // Use JSX element instead of string
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
