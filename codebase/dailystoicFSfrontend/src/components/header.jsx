/* Assets */
import { useAuthContext } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import logo from '../assets/images/logo-new.png';

const Navbar = () => {
    const { user, logout } = useAuthContext();
    return (
        <nav className="py-4 px-12 flex">
            <div className="flex gap-12 items-center justify-between w-full">
                <Link to="/">
                    <img src={logo} alt="logo" className='w-[80px]'/>
                </Link>
                <div className='flex gap-4 items-center'>
                    <Link to="/about" className="text-white font-playfair text-xl">
                        About
                    </Link>
                    {user ? (
                        <>
                            <Link to="/bookmarks" className="text-white font-playfair text-xl">
                                Bookmarks
                            </Link>
                            <Button onClick={logout} className="text-black font-playfair text-xl">
                                Sign out
                            </Button>
                        </>
                    ) : (
                        <Link to="/login" className="text-white font-playfair text-xl">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
