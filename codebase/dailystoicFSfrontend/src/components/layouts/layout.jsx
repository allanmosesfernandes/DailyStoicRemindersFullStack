import { Toaster } from "@/components/ui/toaster";
import Navbar from "../header";

const Layout = ({ children }) => {
    return (
        <div>
            <main>
                <Navbar />
                {children}
            </main>
            <Toaster />
        </div>
    );
};

export default Layout;
