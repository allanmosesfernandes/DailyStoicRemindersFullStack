import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
            <Toaster />
        </div>
    );
};

export default Layout;
