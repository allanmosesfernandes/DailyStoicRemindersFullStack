import { useState } from "react";
import Quotes from "../assets/quotes.js";

const DailyQuote = () => {

    const today = new Date();
    const monthNumber = today.getMonth();
    const monthDate = today.getDate();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[monthNumber];
    const [quotesData, setQuotesData ] = useState(Quotes);
    const quoteOfTheDay = quotesData.filter(quote => quote.title === monthName)[0].quotes.filter(quote => quote.date == monthDate)[0];
    const fullyear = today.getFullYear();
    console.log('quoteOfTheDay', quoteOfTheDay);
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-center h-100 text-center mt-8">
                <h1 className="font-gothic text-8xl border-t-2 border-slate-400 border-b-2 mt-20 mb-10 p-4">{`${monthName} ${monthDate}, ${fullyear}`}</h1>
                <p className="relative width-fit text-3xl font-playfair w-fit m-auto title-styles my-10">{quoteOfTheDay.title}</p>
            </div>

            <div>
                <p className="text-2xl font-playfair text-center mx-auto w-8/12"> {quoteOfTheDay.quote} <br/><span>- {quoteOfTheDay.author}</span>
                </p>
            </div>

            <div className="my-12">
                <p className="text-2xl font-playfair text-center mx-auto w-10/12"> {quoteOfTheDay.text} </p>
            </div>
        </>
    )
}


export default DailyQuote;