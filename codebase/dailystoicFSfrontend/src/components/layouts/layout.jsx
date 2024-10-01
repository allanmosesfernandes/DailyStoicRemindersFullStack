import { Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Navbar from "../header";

const Layout = () => {
    return (
        <div>
            <main>
                <Navbar />
                <Outlet /> {/* This replaces {children} */}
            </main>
            <Toaster />
        </div>
    );
};

export default Layout;
