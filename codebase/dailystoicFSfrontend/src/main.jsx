import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "@/routes/login.jsx";
import RegistrationForm from "@/routes/register.jsx";
import Register from "@/routes/register.jsx";
import Layout from "./components/layouts/layout.jsx"
import HomePage from "@/routes/homepage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
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
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    </React.StrictMode>,
)
