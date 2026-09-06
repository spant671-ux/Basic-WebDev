// ==================== Dates ====================

// Creating a new Date object representing the current date and time.
let myDate = new Date();

// Various ways to format and log the Date object:

// Expected Output: Full details (e.g., "Sat Jul 18 2026 01:23:35 GMT...")
// console.log(myDate.toString());

// Expected Output: Date only (e.g., "Sat Jul 18 2026")
// console.log(myDate.toDateString());

// Expected Output: Localized date & time (e.g., "7/18/2026, 1:23:35 AM")
// console.log(myDate.toLocaleString());

// The type of a Date object is 'object'.
// Expected Output: "object"
console.log(typeof myDate);

// Different ways to construct specific Date objects:

// 1. Passing year, month (0-indexed, so 0 is January), and day:
// Jan 23, 2023
// let myCreatedDate = new Date(2023, 0, 23);

// 2. Passing year, month, day, hour, minute:
// Jan 23, 2023, 05:03 AM
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);

// 3. Passing ISO Date String (YYYY-MM-DD):
// Jan 14, 2023
// let myCreatedDate = new Date("2023-01-14");

// 4. Passing custom date format (MM-DD-YYYY):
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());


// ==================== Timestamps ====================

// Date.now() returns the numeric value corresponding to the current time - the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// Get the timestamp in milliseconds of a specific date object.
// console.log(myCreatedDate.getTime());

// Convert milliseconds timestamp to seconds (and round down to avoid decimal points).
// console.log(Math.floor(Date.now() / 1000));


// ==================== Date Components ====================

let newDate = new Date();

// getMonth() returns the month index (0-11). We add 1 to display the standard human-readable month (1-12).
console.log(newDate.getMonth() + 1);

// getDay() returns the day of the week (0-6, where 0 is Sunday)
// `${newDate.getDay()} and the time `

// toLocaleString can be customized with configuration options.
newDate.toLocaleString('default', {
    // Returns name of the day in full (e.g., "Saturday")
    weekday: "long"
});

