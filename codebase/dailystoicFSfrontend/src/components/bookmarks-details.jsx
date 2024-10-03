import { capitalizeFirstLetter } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialShare from './socialQuote';
import back from '../assets/images/back.png';
import deleteImg from '../assets/images/delete.png';
import { toast } from './ui/use-toast';
import { ToastAction } from '@radix-ui/react-toast';
import { useAuthContext } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import Trash from '../assets/images/trash.svg'

const BookmarkDetail = () => {
    const location = useLocation();
    const { collection, id } = location.state || {}; // Access the state passed via Link
    const { title, quote, author, text } = collection;
    const { user } = useAuthContext();
    const navigate = useNavigate();

    // Delete handler
    const deleteBookmark = async (id) => {
        try {
            const { error } = await supabase
                .from('bookmarks')
                .delete()
                .eq('id', id)
                .eq('user_id', user.id);

            if (error) {
                throw error;
            }

            // Show a toast notification
            toast({
                title: 'Bookmark deleted',
                description: 'Your bookmark has been successfully deleted',
                duration: 2000,
            });

            // Navigate to homepage after a delay (or directly)
            setTimeout(() => {
                navigate('/bookmarks'); // Check if navigate is being called
            }, 2000);
        } catch (error) {
            console.error('Error deleting bookmark:', error);
        }
    };
    if (!collection) {
        return <p>No bookmark data available.</p>;
    }

    const deleteHandler = () => {
        toast({
            title: 'Are you sure',
            description: 'Are you sure you want to delete this bookmark?',
            action: (
                <ToastAction
                    altText="Goto schedule to undo"
                    onClick={() => deleteBookmark(id)}
                    className="p-2 text-xs border-1 rounded-md font-medium shadow-lg bg-white text-black border-white"
                >
                    Delete
                </ToastAction>
            ),
        });
    };
    return (
        <div className="d-flex flex-column align-items-center justify-center text-center text-slate-50">
            <span className="ml-[50px] flex mb-5">
                <Link to="/bookmarks">
                    <img src={back} />
                </Link>
            </span>
            <h1 className="font-gothic text-4xl lg:text-6xl border-t-2 border-slate-400 border-b-2 mt-0 mb-5 p-4">
                {capitalizeFirstLetter(title)}
            </h1>
            <button className="w-8/12 flex flex-col items-end mb-5 mx-auto" onClick={deleteHandler}>
                <img src={Trash} />
            </button>
            <div className="w-8/12 mx-auto text-2xl mt-6 px-4 font-playfair">
                <p className="font-playfair">{quote}</p>
                <p className="mt-4 text-right">- {author}</p>
            </div>
            <div className="w-8/12 mx-auto text-2xl mt-10 p-4 font-playfair leading-10">
                <p className="">{text}</p>
            </div>
            <SocialShare />
        </div>
    );
};

export default BookmarkDetail;
