const score = 400
console.log(score); // Prints: 400

const balance = new Number(100)
console.log(balance); // Prints: [Number: 100]

console.log(balance.toString().length); // Converts to string "100" and gets length 3. Prints: 3
console.log(balance.toFixed(3)); // Converts to string "100.000". Prints: "100.000"

const otherNumbar = 123.8966
console.log(otherNumbar.toPrecision(4)); // Formats number to "123.9" with 4 significant digits. Prints: "123.9"

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // Formats to Indian locale, Prints: "10,00,000"

// ****************** Maths ***************** //

console.log(Math); // Prints the entire Math object with all its properties and methods.

console.log(Math.abs(-4)); // Absolute value of -4. Prints: 4
console.log(Math.round(4.6)); // Rounds 4.6 to the nearest integer. Prints: 5
console.log(Math.ceil(4.2)); // Rounds 4.2 up to the nearest integer. Prints: 5
console.log(Math.floor(4.9)); // Rounds 4.9 down to the nearest integer. Prints: 4
console.log(Math.min(4, 3, 6, 8)); // Finds the smallest number. Prints: 3
console.log(Math.max(4, 3, 6, 8)); // Finds the largest number. Prints: 8

console.log(Math.random()); // Generates a random number between 0 and 1 (exclusive). Prints a random value like 0.374540
console.log((Math.random() * 10) + 1); // Generates a random number between 1 and 11. Prints a random value like 5.7364
console.log(Math.floor(Math.random() * 10) + 1); // Generates a random integer between 1 and 10. Prints a random integer like 7

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Generates a random integer between 10 and 20. Prints a random integer like 15



// ***************** Explaination and Summary ********************* //


// This code demonstrates basic operations with numbers in JavaScript, including creating variables, using number methods, and performing mathematical calculations. Here's a simple breakdown:

// Basic Variable and Logging:

// A variable score is created with a value of 400 and logged to the console. It simply prints 400.
// Using the Number Object:

// The variable balance is created as a Number object with the value 100. When logged, it prints the object representation [Number: 100].
// balance.toString().length converts the number to the string "100" and gets the length of this string, which is 3.
// balance.toFixed(3) converts 100 to a string with three decimal places, resulting in "100.000".
// Number Precision:

// The variable otherNumbar is created with the value 123.8966. The toPrecision(4) method formats this number to four significant digits, resulting in "123.9".
// Locale Formatting:

// The variable hundreds is set to 1000000. The toLocaleString('en-IN') method formats this number according to the Indian numbering system, resulting in "10,00,000".
// Mathematical Operations with Math Object:

// The Math object is logged, which contains various mathematical functions.
// Math.abs(-4) returns the absolute value of -4, which is 4.
// Math.round(4.6) rounds 4.6 to the nearest integer, which is 5.
// Math.ceil(4.2) rounds 4.2 up to the nearest integer, which is 5.
// Math.floor(4.9) rounds 4.9 down to the nearest integer, which is 4.
// Math.min(4, 3, 6, 8) finds the smallest number among the arguments, which is 3.
// Math.max(4, 3, 6, 8) finds the largest number among the arguments, which is 8.
// Generating Random Numbers:

// Math.random() generates a random decimal number between 0 and 1.
// (Math.random() * 10) + 1 generates a random decimal number between 1 and 11.
// Math.floor(Math.random() * 10) + 1 generates a random integer between 1 and 10.
// A random integer between 10 and 20 is generated using the formula (Math.floor(Math.random() * (max - min + 1)) + min), where min is 10 and max is 20.


