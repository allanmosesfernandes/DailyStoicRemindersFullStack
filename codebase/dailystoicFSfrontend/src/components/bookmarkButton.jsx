import { useAuthContext } from '@/context/AuthContext';
import bookmarkIconEmpty from '../assets/images/bookmark-white.png';
import bookmarkIconFull from '../assets/images/bookmark.png';

import { toast } from './ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { ToastAction } from '@radix-ui/react-toast';

const BookMarkButton = ({ quote }) => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const goToBookMarksPage = () => {
        navigate('/bookmarks');
    };
    const addBookmark = async (quoteOfTheDay, notes = '') => {
        if (!user) {
            toast({
                title: 'Please Sign In',
                description: 'You need to be signed in to access your bookmarks.',
                duration: 3000,
            });
            navigate('/login');
            window.scrollTo(0,0);
            return;
        }
        if (isBookmarked) {
            toast({
                title: 'Bookmark already exists',
                description: 'Click button to view',
                action: (
                    <ToastAction
                        altText="Go to bookmarks"
                        className="p-2 text-xs border-1 rounded-md font-medium shadow-lg bg-white text-black border-white"
                        onClick={goToBookMarksPage}
                    >
                        Go to bookmarks
                    </ToastAction>
                ),
            });
            return;
        }
        try {
            const { data, error } = await supabase.from('bookmarks').insert([
                {
                    user_id: user.id,
                    collection: quoteOfTheDay,
                },
            ]);
            if (error) {
                console.error('Error adding bookmark:', error);
                throw error;
            } else {
                toast({
                    title: 'Bookmark added successfully',
                    action: (
                        <ToastAction
                            altText="Go to bookmarks"
                            className="p-2 text-xs border-1 rounded-md font-medium shadow-lg bg-white text-black border-white"
                            onClick={goToBookMarksPage}
                        >
                            Go to bookmarks
                        </ToastAction>
                    ),
                });
            }
            console.log('Bookmark added:', data);
            // Optionally update state or UI to reflect the new bookmark
        } catch (error) {
            console.error('Error in addBookmark:', error);
        }
    };
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const checkIfBookmarked = async () => {
            if (!user) {
                return;
            }

            try {
                // Get today's date in UTC
                const today = new Date();
                const utcYear = today.getUTCFullYear();
                const utcMonth = String(today.getUTCMonth() + 1).padStart(2, '0');
                const utcDay = String(today.getUTCDate()).padStart(2, '0');
                const todayUTCDate = `${utcYear}-${utcMonth}-${utcDay}`;

                // Start and end of the day in UTC
                const startOfDay = new Date(`${todayUTCDate}T00:00:00Z`);
                const endOfDay = new Date(`${todayUTCDate}T23:59:59Z`);

                const { data, error } = await supabase
                    .from('bookmarks')
                    .select('id')
                    .eq('user_id', user.id)
                    .gte('created_at', startOfDay.toISOString())
                    .lte('created_at', endOfDay.toISOString());

                if (error) {
                    console.error('Error checking bookmark:', error);
                    return;
                }

                // Set isBookmarked based on whether data was returned
                setIsBookmarked(data && data.length > 0);
            } catch (error) {
                console.error('Error in checkIfBookmarked:', error);
            }
        };

        checkIfBookmarked();
    }, [user]);

    return (
        <button className="sm:absolute sm:m-0 mb-2 top-0 right-0" onClick={() => addBookmark(quote)}>
            <img src={isBookmarked ? bookmarkIconFull : bookmarkIconEmpty} />
        </button>
    );
};

export default BookMarkButton;
