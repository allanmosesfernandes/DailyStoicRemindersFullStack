import { useEffect, useState } from 'react';
import Quotes from '../assets/quotes.js';
import { supabase } from '@/lib/supabase.js';
import { useAuthContext } from '@/context/AuthContext.jsx';
import BookMarkButton from './bookmarkButton.jsx';

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

    return (
        <div className="" id='quote-anchor'>
            <div className="d-flex flex-column align-items-center justify-center text-center mt-8">
                <h1 className="font-gothic text-4xl lg:text-8xl border-t-2 border-slate-400 border-b-2 mt-20 mb-10 p-4">{`${monthName} ${monthDate}`}</h1>
                <div className="relative lg:w-9/12 mx-auto">
                    <p className="relative width-fit lg:text-3xl sm:text-lg text-md font-playfair w-fit m-auto title-styles lg:my-10 my-4">
                        {quoteOfTheDay.title}
                    </p>
                    <BookMarkButton quote={quoteOfTheDay} />
                </div>
            </div>

            <div className="lg:w-9/12 mx-auto p-lg-0 p-2">
                <p className="lg:text-2xl sm:text-xl text-md  font-playfair text-center mx-auto lg:leading-normal">
                    {quoteOfTheDay.quote}
                </p>
                <p className="lg:text-2xl sm:text-xl text-md font-playfair lg:text-right text-center my-2">
                    {quoteOfTheDay.author}
                </p>
                <p className="lg:text-2xl sm:text-xl text-md font-playfair lg:p-0 p-md-4 p-2 text-center my-8 mx-auto lg:leading-10 relative">
                    <span className="quote-capitalize">{quoteOfTheDay.text.charAt(0)}</span>
                    {quoteOfTheDay.text.slice(1)}
                </p>
            </div>
        </div>
    );
};

export default DailyQuote;
