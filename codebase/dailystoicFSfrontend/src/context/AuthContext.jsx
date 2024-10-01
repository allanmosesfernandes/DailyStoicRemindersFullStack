import { supabase } from '@/lib/supabase';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);

    // Login function inside Auth provider.
    const login = async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            throw error;
        }
        return data;
    };

    // Logout function
    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            throw error;
        }
    };

    // Register function
    const createUser = async (email, password, extraDetails) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: extraDetails, // Passing extra user metadata
            },
        });
        if (error) {
            throw error;
        }
        return data;
    };


    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                setUser(session.user);
                setAuth(true);
            }
            if (event === 'SIGNED_OUT') {
                setUser(null);
                setAuth(false);
            }
            if (event === 'SIGNED_OUT') {
                setUser(null);
                setAuth(false);
            }
        });
        return () => {
            data.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, auth, login, logout, createUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
