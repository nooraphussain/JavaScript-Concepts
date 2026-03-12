const now = new Date();
console.log(now);
console.log(now.getTime());
console.log(now.getMilliseconds());
console.log(now.getSeconds());
console.log(now.getMinutes());
console.log(now.getHours());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(now.getUTCDate());
console.log(now.getUTCDay());
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.getTimezoneOffset())
console.log(now.toLocaleDateString())
console.log(now.toLocaleDateString('en-IN'))


const date = new Date();
const birthday = new Date();
birthday.setDate(date.getDate() + 10)
console.log(birthday.toDateString())


const start = new Date('2025-01-01');
const end = new Date('2025-10-28');
const diffMilliseconds = end - start;
console.log(diffMilliseconds);
const diffMonths = diffMilliseconds/ (1000*60*60*24*26);
console.log(diffMonths)


// Format today’s date as DD/MM/YYYY without libraries.
const today = new Date()
console.log("Format today’s date as DD/MM/YYYY without libraries:" , today.toLocaleDateString('en-IN'))

// Add 15 days to a given date.
const newDate = new Date();
newDate.setDate(today.getDate() + 15);
console.log('Add 15 days to a given date:', newDate.toLocaleDateString('en-In'))


// Find how many days are left until your birthday.
const myBirthday = new Date(2026, 4, 21);
const diffMs = myBirthday - today;
const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
console.log("Days left until birthday:", daysLeft);


// Display current date in the format: Monday, 13 October 2025.
console.log('Display current date in the format: Monday, 13 October 2025:', today.toLocaleDateString('en-GB', {
    weekday:'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}))


// Given two dates, find which one is earlier.
const firstDate = new Date(2025, 3, 12);
const secondDate = new Date(2025, 6, 30);
let early = firstDate > secondDate ? 'secondDate' : 'firstDate';
console.log('Earlier:', early)

// How to safely clone a Date object?
const clone = new Date(today.getTime());
const clone2 = new Date(today);
