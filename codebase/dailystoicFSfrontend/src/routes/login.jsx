import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import axios from 'axios';
import {yupResolver} from "@hookform/resolvers/yup";
import {userSchema} from "@/lib/schema.js";
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        console.log('data', data);
        try {
            const response = await axios.post('http://localhost:5432/signin', data);
            if(response.status === 200 && response.data?.token) {
                // Store the token in cookies
                Cookies.set('token', response.data.token, { expires: 30 }); // Set the cookie to expire in 7 days
            }
        }catch(error) {
            console.error(error)
        }
    };

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="w-full max-w-md border border-zinc-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Sign Up</h2>
                <p className="text-gray-400 mb-2">Enter your information to create an account</p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-white">Email</label>
                        <input
                            required={true}
                            type="email"
                            {...register('email')}
                            placeholder="walter.white@chemistrygenius.com"
                            className="mt-1 px-3 py-2 bg-transparent border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full text-white"
                        />
                        <p className="text-red-500 text-sm">{errors.email?.message}</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white">Password</label>
                        <input
                            type="password"
                            required={true}
                            {...register('password')}
                            placeholder="Enter your password"
                            className="mt-1 mb-2 px-3 py-2 bg-transparent border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full text-white"
                        />
                        <p className="text-red-500 text-sm font-bold">{errors.password?.message}</p>
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
                        className="w-full text-bg- px-4 py-2 border border-gray-600 bg-transparent text-white rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-4"
                    >
                        Sign in with Google
                    </button>
                </div>
                <div className="mt-4 text-center">
                    <Link to="/register" className="text-white hover:underline">
                       Don't have an account? Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}