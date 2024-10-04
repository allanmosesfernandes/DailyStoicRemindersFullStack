/* Assets */
import { useAuthContext } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import logo from '../assets/images/logo-new.png';
import hamburger from '../assets/images/hamburger.svg';
import close from '../assets/images/close.svg';
import { useState } from 'react';

const Navbar = () => {
    const { user, logout } = useAuthContext();
    // State to keep track of the rotation angle
    const [rotation, setRotation] = useState(0);

    // Function to handle hover: increment rotation by 180 degrees
    const handleHover = () => {
        setRotation(rotation + 50);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => setIsOpen((open) => !open);

    return (
        <nav className="py-4 sm:px-12 px-6 flex shadow-sm">
            <div className="flex gap-12 items-center justify-between w-full">
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="sm:w-[80px] w-[70px] transition-transform duration-500 ease" // Smooth rotation
                        style={{ transform: `rotate(${rotation}deg)` }} // Apply rotation based on state
                        onMouseEnter={handleHover} // Trigger on mouse hover
                    />
                </Link>
                <div className="sm:flex gap-4 items-center hidden">
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
                <div
                    className={`md:hidden block w-[30px] ${isOpen ? 'hidden' : ''}`}
                    onClick={toggleMobileMenu}
                >
                    <img src={hamburger} alt="mobile menu" />
                </div>
                <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                    <div className="flex justify-end" onClick={toggleMobileMenu}>
                        <img src={close} alt="mobile menu" className="w-[30px]" />
                    </div>

                    <ul className="flex flex-col gap-2 align-left mt-[5] font-playfair text-xl text-left">
                        <li>
                            <Link to="/about" onClick={toggleMobileMenu}>About</Link>
                        </li>
                        {user ? (
                        <>
                            <Link to="/bookmarks" className="text-white font-playfair text-xl">
                                Bookmarks
                            </Link>
                            <Button onClick={logout} className="text-black font-playfair text-xl my-2">
                                Sign out
                            </Button>
                        </>
                    ) : (
                        <Link to="/login" className="text-white font-playfair text-xl" onClick={toggleMobileMenu}>
                            Login
                        </Link>
                    )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
