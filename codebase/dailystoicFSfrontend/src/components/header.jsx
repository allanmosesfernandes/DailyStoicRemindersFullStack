/* Assets */
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <nav className="py-4 px-12 flex">
        <div className="ml-auto flex gap-12">
            <Link to="/login" className="text-white font-playfair text-xl">
                About
            </Link>
            <Link to="/login" className="text-white font-playfair text-xl">
                Login
            </Link>
        </div>
    </nav>
)
}

export default Navbar