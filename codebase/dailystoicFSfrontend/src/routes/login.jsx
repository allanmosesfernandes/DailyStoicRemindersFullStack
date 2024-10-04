import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import googleLogo from '../assets/images/google.svg';

export default function LoginPage() {
    const { login, user } = useAuthContext(); // Access user and login from context
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Redirect and show toast if the user is already logged in
    useEffect(() => {
        if (user) {
            toast({
                title: 'Already Logged In',
                description: 'You are already logged in.',
                duration: 3000,
            });
            navigate('/'); // Redirect to homepage or any other protected route
        }
    }, [user, navigate]);

    // Initialize form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Toggle password functionality
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // On Submit Handler
    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            const response = await login(email, password);
            if (response) {
                toast({
                    title: 'Login Successful',
                    description: 'You have been logged in successfully.',
                    duration: 3000,
                });
                navigate('/'); // Redirect to homepage after login
            }
        } catch (error) {
            console.error('Login Error:', error);
            toast({
                variant: 'destructive',
                title: 'Login Failed',
                description: error.message || 'An error occurred during login. Please try again.',
            });
        }
    };

    const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `http://localhost:5173/`,
            },
        });
        try {
            const response = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `http://localhost:5173/`,
                },
            });
            if (response) {
                toast({
                    title: 'Login Successful',
                    description: 'You have been logged in successfully.',
                    duration: 3000,
                });
                navigate('/'); // Redirect to homepage after login
            }
        } catch (error) {
            console.error('Login Error:', error);
            toast({
                variant: 'destructive',
                title: 'Login Failed',
                description: error.message || 'An error occurred during login. Please try again.',
            });
        }
    };

    return (
        <div>
            {/* Login Form */}
            <h1 className="font-gothic text-4xl lg:text-8xl border-t-2 border-slate-400 border-b-2 mb-10 p-4 text-center">
                Login
            </h1>
            <div className="flex flex-col lg:h-screen items-center">
                <div className="sm:w-full w-11/12 max-w-md border border-zinc-50 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold text-white mb-4">Sign In</h2>
                    <p className="text-gray-400 mb-2">
                        Enter your details to login to your account
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-white">Email</label>
                            <input
                                required
                                type="email"
                                {...register('email')}
                                placeholder="walter.white@chemistrygenius.com"
                                className="mt-1 px-3 py-2 bg-transparent border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full text-white"
                            />
                            <p className="text-red-500 text-sm">{errors.email?.message}</p>
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-white">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                {...register('password')}
                                placeholder="Enter your password"
                                className="mt-1 mb-2 px-3 py-2 bg-transparent border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full text-white"
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                onClick={togglePasswordVisibility}
                                className="absolute right-4 top-9 cursor-pointer text-gray-400"
                            />
                            <p className="text-red-500 text-sm font-bold">
                                {errors.password?.message}
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="mt-2 w-full px-4 py-2 bg-zinc-50 text-zinc-950 rounded-md shadow hover:bg-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className="mt-2 flex justify-between items-center">
                        <button
                            type="button"
                            className="w-full flex justify-center gap-2 text-bg- px-4 py-2 border border-gray-600 bg-transparent text-white rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-4"
                            onClick={signInWithGoogle}
                        >
                            Sign in with Google <img src={googleLogo} alt="Google Logo" />
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <Link to="/register" className="text-white hover:underline">
                            Don't have an account? Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
