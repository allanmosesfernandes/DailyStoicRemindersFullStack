/* Assets */
import { useAuthContext } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
    const { auth, user, logout } = useAuthContext();
    console.log('is user authenticated', user);
    return (
        <nav className="py-4 px-12 flex">
            <div className="ml-auto flex gap-12">
                <Link to="/login" className="text-white font-playfair text-xl">
                    About
                </Link>
                {user ? (
                    <Button onClick={logout} className="text-black font-playfair text-xl">Sign out</Button>
                ) : (
                    <Link to="/login" className="text-white font-playfair text-xl">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
