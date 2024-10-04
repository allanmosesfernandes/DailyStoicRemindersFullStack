import DailyQuote from '@/components/dailyQuote.jsx';
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
    const daysLeftInMonth = getDaysLeftInMonth();
    const totalDaysInMonth = new Date(currentYear, new Date().getMonth() + 1, 0).getDate(); // Total days in the current month

    // Calculate percentages
    // Calculate the remaining percentage values
    const daysRemainingPercentage = ((daysLeft / daysInYear) * 100).toFixed(); // Remaining days in the year
    const weeksRemainingPercentage = ((weeksLeft / 52) * 100).toFixed(); // Remaining weeks in the year
    const monthsRemainingPercentage = ((monthsLeft / 12) * 100).toFixed(); // Remaining months in the year
    const daysInMonthRemainingPercentage = ((daysLeftInMonth / totalDaysInMonth) * 100).toFixed(); // Remaining days in the current month
    const moveToQuote = () => {
        const anchor = document.getElementById('quote-anchor');
        anchor?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-center text-center mt-2 h-lvh">
                <h1 className="font-gothic text-4xl lg:text-8xl border-t-2 border-slate-400 border-b-2 mb-10 p-4">
                    Daily Stoic Reminders
                </h1>
                <p className="lg:text-3xl sm:text-xl text-md font-playfair lg:w-9/12 w-11/12 m-auto">
                    Embark on a daily ritual that connects you with the wisdom of the ancients.{' '}
                    <br />
                    Each quote serves as a gentle nudge towards introspection, helping you cultivate
                    a balanced and mindful existence.
                </p>
                <p className="lg:text-3xl sm:text-xl text-md  font-playfair lg:w-9/12 w-11/12 mx-auto my-10">
                    {monthsLeft} / 12 <span className="font-gothic">Months</span> (
                    {monthsRemainingPercentage}%) remaining in {currentYear}.
                    <br />
                    {weeksLeft} / 52 <span className="font-gothic">Weeks</span> (
                    {weeksRemainingPercentage}%) remaining in {currentYear}.
                    <br />
                    {daysLeft} / {daysInYear} <span className="font-gothic">Days</span> (
                    {daysRemainingPercentage}%) remaining in {currentYear}.
                    <br />
                    {daysLeftInMonth} / {totalDaysInMonth} <span className="font-gothic">Days</span>{' '}
                    <span className="text-">({daysInMonthRemainingPercentage}%)</span> remaining in{' '}
                    {monthName}.
                </p>
                <div className="mouse flex mx-auto" onClick={moveToQuote}></div>
            </div>
            <DailyQuote />
            <SocialShare />
            <StoicHabits />
        </>
    );
};

export default HomePage;
