import { useEffect, useState } from 'react';
import Quotes from '../assets/quotes.js';
import { supabase } from '@/lib/supabase.js';
import { useAuthContext } from '@/context/AuthContext.jsx';

const DailyQuote = () => {
    const today = new Date();
    const monthNumber = today.getMonth();
    const { user } = useAuthContext();
    console.log('user', user);
    const monthDate = today.getDate();
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const monthName = monthNames[monthNumber];
    const [quotesData, setQuotesData] = useState(Quotes);
    const quoteOfTheDay = quotesData
        .filter((quote) => quote.title === monthName)[0]
        .quotes.filter((quote) => quote.date == monthDate)[0];
    const fullyear = today.getFullYear();
    const addBookmark = async (itemId, notes = '') => {
        if (!user) {
            console.error('User is not authenticated');
            alert('You need to login to access your bookmarks')
            return;
        }

        try {
            const { data, error } = await supabase
                .from('bookmarks')
                .insert([
                    {
                        user_id: user.id,
                        collection: quoteOfTheDay,
                    },
                ]);
            if (error) {
                console.error('Error adding bookmark:', error);
                throw error;
            }

            console.log('Bookmark added:', data);
            // Optionally update state or UI to reflect the new bookmark
        } catch (error) {
            console.error('Error in addBookmark:', error);
        }
    };

    return (
        <div className="">
            <div className="d-flex flex-column align-items-center justify-center text-center mt-8">
                <h1 className="font-gothic text-4xl lg:text-8xl border-t-2 border-slate-400 border-b-2 mt-20 mb-10 p-4">{`${monthName} ${monthDate}`}</h1>
                <div>
                    <p className="relative width-fit lg:text-3xl text-lg font-playfair w-fit m-auto title-styles my-10">
                        {quoteOfTheDay.title}
                    </p>
                    <button onClick={() => addBookmark(69)}>Bookmark Quote</button>
                </div>
            </div>

            <div className="lg:w-8/12 mx-auto">
                <p className="lg:text-2xl text-lg font-playfair text-center mx-auto leading-normal">
                    {quoteOfTheDay.quote}
                </p>
                <p className="lg:text-2xl text-lg font-playfair lg:text-right text-center my-2">
                    {quoteOfTheDay.author}
                </p>
                <p className="lg:text-2xl text-xl font-playfair lg:p-0 p-4 text-center my-8 mx-auto leading-loose relative">
                    <span className="quote-capitalize">{quoteOfTheDay.text.charAt(0)}</span>
                    {quoteOfTheDay.text.slice(1)}
                </p>
            </div>
        </div>
    );
};

export default DailyQuote;
