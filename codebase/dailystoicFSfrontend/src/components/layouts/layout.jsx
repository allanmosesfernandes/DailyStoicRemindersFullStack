import { Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Navbar from "../header";
import Footer from '../footer';

const Layout = () => {
    return (
        <div>
            <main>
                <Navbar />
                <Outlet /> {/* This replaces {children} */}
                <Footer />
            </main>
            <Toaster />
        </div>
    );
};

export default Layout;
