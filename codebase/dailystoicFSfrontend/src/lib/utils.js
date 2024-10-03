import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function daysLeftInYear() {
    // Get the current date
    const today = new Date();

    // Create a date object for the last day of the year
    const lastDayOfYear = new Date(today.getFullYear(), 11, 31);

    // Calculate the difference in time (milliseconds) between the two dates
    const timeDifference = lastDayOfYear - today;

    // Convert milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysLeft;
}

export function getDaysInYear(year) {
    const start = new Date(year, 0, 1); // January 1st of the given year
    const end = new Date(year + 1, 0, 1); // January 1st of the next year
    const diff = (end - start) / (1000 * 60 * 60 * 24); // Difference in days
    return diff;
}

export function getDaysLeftInMonth() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // Last day of the current month
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Days left in the current month
    return lastDayOfMonth - today.getDate();
}

export function getTotalDaysLeftInMonthWithName() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // Get full month name
    const monthName = today.toLocaleString('default', { month: 'long' });

    // Last day of the current month
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Days left in the current month
    const daysLeft = lastDayOfMonth - today.getDate();

    return `Total days left in ${monthName}: ${daysLeft}`;
}

function calculateWeeks() {
  var now = new Date();
  var yearStart = new Date(now.getFullYear(), 0, 1);
  var totalWeeksInYear = 52;

  // Calculate the number of days since the start of the year
  var daysSinceYearStart = Math.floor((now - yearStart) / (1000 * 60 * 60 * 24));

  // Calculate the current week number
  var currentWeekNumber = Math.floor(daysSinceYearStart / 7) + 1;

  // Calculate weeks left in the year
  var weeksLeft = totalWeeksInYear - currentWeekNumber;

  // Ensure weeksLeft is not negative
  weeksLeft = weeksLeft >= 0 ? weeksLeft : 0;

  return weeksLeft;
}

export const weeksLeft = calculateWeeks();

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

const d = new Date();
function getMonthsLeftInYear() {
  const today = new Date();
  const currentMonth = today.getMonth(); // Returns month index (0 = January, 11 = December)

  // Total months in a year minus the current month index gives remaining months (0-based index)
  return 12 - (currentMonth + 1);
}
export const monthsLeft = getMonthsLeftInYear();

// Output the result
console.log(`Months left in the year: ${getMonthsLeftInYear()}`);

export const monthName = monthNames[d.getMonth()];
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth(); // October is 9 (0-based index)
function getTotalDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
export const totalDaysInMonth = getTotalDaysInMonth(year, month);
export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
