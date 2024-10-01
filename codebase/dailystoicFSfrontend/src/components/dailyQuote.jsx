import { useEffect, useState } from 'react';
import Quotes from '../assets/quotes.js';

const DailyQuote = () => {
    const today = new Date();
    const monthNumber = today.getMonth();
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
    console.log('quoteOfTheDay', quoteOfTheDay);
    return (
        <div className=''>
            <div className="d-flex flex-column align-items-center justify-center text-center mt-8">
                <h1 className="font-gothic text-8xl border-t-2 border-slate-400 border-b-2 mt-20 mb-10 p-4">{`${monthName} ${monthDate}, ${fullyear}`}</h1>
                <p className="relative width-fit text-3xl font-playfair w-fit m-auto title-styles my-10">
                    {quoteOfTheDay.title}
                </p>
            </div>

            <div>
                <p className="text-2xl font-playfair text-center mx-auto w-8/12 leading-normal">
                    {quoteOfTheDay.quote}
                </p>
                <p className="text-xl font-playfair w-10/12 text-right my-2">
                    {quoteOfTheDay.author}
                </p>
                <p className="text-2xl font-playfair w-10/12 text-center my-8 mx-auto leading-loose relative">
                    <span className="quote-capitalize">{quoteOfTheDay.text.charAt(0)}</span>
                    {quoteOfTheDay.text.slice(1)}
                </p>
            </div>
        </div>
    );
};

export default DailyQuote;
