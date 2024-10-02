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

console.log(`Days left in the year: ${daysLeftInYear()}`);
