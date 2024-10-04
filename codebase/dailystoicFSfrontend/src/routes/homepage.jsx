import DailyQuote from '@/components/dailyQuote.jsx';
import Disclaimer from '@/components/disclaimer';
import SocialShare from '@/components/socialQuote';
import StoicHabits from '@/components/stoicHabits';
import {
    daysLeftInYear,
    getDaysInYear,
    getDaysLeftInMonth,
    monthName,
    monthsLeft,
    totalDaysInMonth,
    weeksLeft,
} from '@/lib/utils';

const HomePage = () => {
    const daysLeft = daysLeftInYear();
    const currentYear = new Date().getFullYear();
    const daysInYear = getDaysInYear(currentYear);
    const daysLeftInCalendarYear = daysInYear - daysLeft;
    const daysLeftInMonth = getDaysLeftInMonth();
    const totalDaysInMonth = new Date(currentYear, new Date().getMonth() + 1, 0).getDate(); // Total days in the current month
    const daysLeftInMonth2 = totalDaysInMonth - daysLeftInMonth;
    // Calculate percentages
    // Calculate the remaining percentage values
    const monthsPassed = 12 - monthsLeft;
    const weeksPassed = 52 - weeksLeft;
    const daysRemainingPercentage = ((daysLeftInCalendarYear / daysInYear) * 100).toFixed(); // Remaining days in the year
    const weeksRemainingPercentage = ((weeksPassed / 52) * 100).toFixed(); // Remaining weeks in the year
    const monthsRemainingPercentage = ((monthsPassed / 12) * 100).toFixed(); // Remaining months in the year
    const daysInMonthRemainingPercentage = ((daysLeftInMonth2 / totalDaysInMonth) * 100).toFixed(); // Remaining days in the current month
    const moveToQuote = () => {
        const anchor = document.getElementById('quote-anchor');
        anchor?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-center text-center mt-2 lg:h-lvh">
                <h1 className="font-gothic text-4xl lg:text-8xl border-t-2 border-slate-400 border-b-2 lg:mb-10 p-4">
                    Daily Stoic Reminders
                </h1>
                <p className="lg:text-3xl sm:text-xl text-md font-playfair lg:w-9/12 w-11/12 m-auto leading-10">
                    Each day brings you a timeless Stoic quote, inviting you to pause, reflect, and
                    embrace the present. <br />
                    As you read, let the passing days, weeks, and months be a gentle reminder of
                    life's fleeting nature—a nudge to cherish each moment and live fully.
                </p>
                <p className="lg:text-3xl sm:text-xl text-md font-playfair lg:w-9/12 w-11/12 mx-auto lg:my-10 my-6">
                    <span className="">
                        <a href="https://en.wikipedia.org/wiki/Memento_mori" target="_blank" className='underline font-gothic'>
                            Memento Mori:
                        </a>
                    </span>{' '}
                    Remember, time is your most precious gift. Make today count.
                </p>
                <p className="lg:text-3xl sm:text-xl text-md  font-playfair lg:w-9/12 w-11/12 mx-auto lg:my-10 my-6 leading-loose">
                    {monthsPassed}/12 <span className="font-gothic">Months</span>  have passed
                    ({monthsRemainingPercentage}%).
                    <br />
                    {weeksPassed}/52 <span className="font-gothic">Weeks</span> are behind us (
                    {weeksRemainingPercentage}%).
                    <br />
                    {daysLeftInCalendarYear}/{daysInYear} <span className="font-gothic">Days</span> (
                    {daysRemainingPercentage}%) have slipped away.
                    <br />
                    {daysLeftInMonth2}/{totalDaysInMonth} <span className="font-gothic">Days</span>{' '}
                    <span className="text-">({daysInMonthRemainingPercentage}%)</span> already gone in{' '}
                    {monthName}.
                </p>
                <div className="mouse flex mx-auto" onClick={moveToQuote}></div>
            </div>
            <DailyQuote />
            <SocialShare />
            <StoicHabits />
            <Disclaimer />
        </>
    );
};

export default HomePage;
