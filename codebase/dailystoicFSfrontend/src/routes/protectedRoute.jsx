import { useAuthContext } from '@/context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { user } = useAuthContext();

    if (!user) {
        // Redirect to login if the user is not authenticated
        return <Navigate to="/login" replace />;
    }

    return <Outlet />; // Render child routes if authenticated
};

export default ProtectedRoute;
