import { capitalizeFirstLetter } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import SocialShare from './socialQuote';
import back from "../assets/images/back.png"
const BookmarkDetail = () => {
    const location = useLocation();
    const { collection } = location.state || {}; // Access the state passed via Link
    const { title, quote,author, text } = collection;

    if (!collection) {
        return <p>No bookmark data available.</p>;
    }

    return (
        <div className="d-flex flex-column align-items-center justify-center text-center mt-8">
            <span className='ml-[30px] flex mb-5'>
                <Link to='/'><img src={back} /></Link>
            </span>
            <h1 className="font-gothic text-4xl lg:text-6xl border-t-2 border-slate-400 border-b-2 mt-0 mb-10 p-4">
                {capitalizeFirstLetter(title)}
            </h1>
            <div className="w-8/12 mx-auto text-2xl mt-6 p-4 font-playfair">
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
