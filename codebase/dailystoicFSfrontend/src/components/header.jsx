/* Assets */
import { useAuthContext } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import logo from '../assets/images/logo-new.png';
import { useState } from 'react';

const Navbar = () => {
    const { user, logout } = useAuthContext();
    // State to keep track of the rotation angle
    const [rotation, setRotation] = useState(0);

    // Function to handle hover: increment rotation by 180 degrees
    const handleHover = () => {
        setRotation(rotation + 100);
    };

    return (
        <nav className="py-4 px-12 flex">
            <div className="flex gap-12 items-center justify-between w-full">
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[80px] transition-transform duration-300 ease-in-out" // Smooth rotation
                        style={{ transform: `rotate(${rotation}deg)` }} // Apply rotation based on state
                        onMouseEnter={handleHover} // Trigger on mouse hover
                    />
                </Link>
                <div className="flex gap-4 items-center">
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
