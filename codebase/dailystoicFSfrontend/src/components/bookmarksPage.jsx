import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useAuthContext } from '@/context/AuthContext';
import { capitalizeFirstLetter } from '@/lib/utils';
import back from '../assets/images/back.png';

const BookmarksPage = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { user } = useAuthContext();

    useEffect(() => {
        const fetchBookmarks = async () => {
            if (!user) return;

            try {
                const { data, error } = await supabase
                    .from('bookmarks')
                    .select('*')
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false });

                if (error) throw error;

                setBookmarks(data);
            } catch (error) {
                console.error('Error fetching bookmarks:', error);
                setError(error.message || 'Error fetching bookmarks');
            } finally {
                setLoading(false);
            }
        };

        fetchBookmarks();
    }, [user]);

    return (
        <div className="d-flex flex-column align-items-center justify-center text-center lg:h-lvh">
            <span className="sm:ml-[50px] ml-[20px] flex mb-5">
                <Link to="/">
                    <img src={back} className='sm:w-full w-[20px]'/>
                </Link>
            </span>
            <h1 className="font-gothic text-4xl lg:text-8xl border-t-2 border-slate-400 border-b-2 mt-0 mb-10 p-4">
                Bookmarks
            </h1>
            {/* Loader */}
            {loading ? (
                <span className="loader mt-10"></span> // Replace this with your loader class or component
            ) : (
                <>
                    {/* Conditional rendering for bookmarks */}
                    {bookmarks.length > 0 ? (
                        <ul className="sm:w-8/12 w-11/12 mx-auto text-2xl">
                            {bookmarks.map((bookmark, index) => (
                                <li key={bookmark.id || index} className="flex align-center mb-4">
                                    <Link
                                        to={`/bookmarks/${bookmark.id}`} // Navigates to bookmarks/:id
                                        state={{ collection: bookmark.collection, id: bookmark.id }} // Passes bookmark data as state
                                        className="flex align-center w-full no-underline border-b-2 border-slate-400"
                                    >
                                        <p className="font-gothic sm:text-2xl text-md">
                                            {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                                        </p>
                                        <div className="social-link sm:ml-4 ml-2">
                                            <p className='text-[18px] font-playfair'>
                                                {`${capitalizeFirstLetter(
                                                    bookmark.collection.title
                                                )}.`}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h2 className="text-xl lg:text-4xl">You don't have any bookmarks yet.</h2>
                    )}
                </>
            )}
        </div>
    );
};

export default BookmarksPage;
