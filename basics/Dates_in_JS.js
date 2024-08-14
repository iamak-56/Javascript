// // Dates

// Create a new Date object representing the current date and time

let myDate = new Date();
console.log(myDate.toString());             // Full string representation of the date and time
console.log(myDate.toDateString());         // Only the date part as a string
console.log(myDate.toLocaleString());       // Date and time formatted according to the locale
console.log(myDate.toISOString());          // ISO 8601 formatted string
console.log(myDate.toLocaleDateString());   // Only the date part formatted according to the locale
console.log(myDate.toLocaleTimeString());   // Only the time part formatted according to the locale
console.log(myDate.toTimeString());         // Time part as a string
console.log(typeof myDate);                 // 'object' - Date is an object in JavaScript

// The following block contains errors due to multiple declarations of the same variable.
// We'll fix this by removing the repeated 'let' keywords.

// Create specific dates

let myCreatedDate = new Date(2023, 0, 23);          // January 23, 2023
myCreatedDate = new Date(2023, 0, 23, 5, 3);        // January 23, 2023, at 5:03 AM
myCreatedDate = new Date("2023-01-14");             // January 14, 2023, using an ISO string
myCreatedDate = new Date("01-14-2023");             // January 14, 2023, using a non-standard format
console.log(myCreatedDate.toLocaleString());        // Logs the date in local format

// Generate a timestamp and perform operations on time

let myTimeStamp = Date.now();                      // Current timestamp in milliseconds since Unix epoch
console.log(myTimeStamp);                          // Logs the timestamp
console.log(myCreatedDate.getTime());              // Logs the timestamp of myCreatedDate
console.log(Math.floor(Date.now()/1000));          // Logs the current timestamp in seconds

// Create another date object and get some specific information

let newDate = new Date();
console.log(newDate);                              // Logs the current date and time
console.log(newDate.getMonth() + 1);               // Logs the current month (adding 1 because months are zero-based)
console.log(newDate.getDay());                     // Logs the day of the week (0 for Sunday, 1 for Monday, etc.)

// The following line is commented out because it's incomplete and doesn't perform any operation.
// It also incorrectly uses a comment syntax in a string template. 
// If you want to include the day name and time, you should do this:

console.log(`${newDate.toLocaleString('default', { weekday: "long" })} and the Time`); 
// This will output the day of the week (e.g., "Wednesday") and a placeholder text "and the Time"

// The following line correctly formats the weekday but doesn't use the result for anything.
newDate.toLocaleString('default', { weekday: "long" });  // This line does nothing on its own



// ******************* SUMMARY ******************** //

// [Current Date and Time]

// ..The code creates a Date object called myDate representing the current date and time.
// ..It then logs various formats of this date and time to the console, such as full date/time, just the date, time, and ISO string format.

// [Creating Specific Dates]

// ..A Date object called myCreatedDate is created multiple times to represent specific dates:
// .. January 23, 2023
// ..January 23, 2023, at 5:03 AM
// ..January 14, 2023, using different string formats.
// ..The final version of myCreatedDate (January 14, 2023) is logged in a local date/time format.

// [Timestamps]

// ..The code logs the current timestamp (in milliseconds since January 1, 1970) and also logs the timestamp for the myCreatedDate.
// ..It also logs the current timestamp in seconds by dividing it by 1000 and rounding down.

// [Working with Date Parts]

// ..A new Date object called newDate is created representing the current date and time.
// ..The code logs the current month (with 1 added because JavaScript months are zero-based) and the day of the week (0 for Sunday, 1 for Monday, etc.).

// [Commented Code]

// ..There’s a commented-out line intended to combine the day of the week with the time, but it’s not functional.
// ..Finally, the code converts the newDate to a string showing the full weekday name (like "Monday"), but this result isn't used for anything further in the code.

// [Key Points]

// ..The code demonstrates creating and manipulating date and time in JavaScript.
// ..It shows how to work with different formats, specific dates, and timestamps.
// ..Some parts of the code have redundant variable declarations and incomplete functionality, which can be refined.






