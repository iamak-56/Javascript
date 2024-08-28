// Define an object with a method that logs a welcome message
const user = {
  username: "Akhshan",
  price: 999,

  welcomeMessage: function () {
    // Log the username and the whole object to the console
    console.log(`${this.username}, welcome to Website`);
    console.log(this); // `this` refers to the `user` object
  },
};

// Call the method to see the initial username
user.welcomeMessage(); // Logs: "Akhshan, welcome to Website" and the `user` object

// Change the username and call the method again
user.username = "sam";
user.welcomeMessage(); // Logs: "sam, welcome to Website" and the updated `user` object

// Log the global `this` context (in a browser, this would be the `window` object)
console.log(this); // Logs the global `this` (e.g., `window` in a browser)

// Define a function `chai` that logs `this.username`
function chai() {
  let username = "Akhshan";
  console.log(this.username); // Logs `undefined` because `this` refers to the global object, where `username` is not defined
}
chai();

// Redefine `chai` as an anonymous function expression
const chai = function () {
  let username = "AKhshan";
  console.log(this.username); // Similar to the previous `chai`, logs `undefined` because `this` is still the global object
};

// Redefine `chai` as an arrow function
const chai = () => {
  let username = "Akhshan";
  // Arrow functions don't have their own `this`, so this logs the surrounding context's `this`
  console.log(this); // Logs the `this` from the surrounding scope, likely the global object
};
chai();

// Different variations of an arrow function that adds two numbers or returns an object
// const addtwo = (num1, num2) => {
//     return num1 + num2 // Returns the sum of `num1` and `num2`
// }

// const addtwo = (num1, num2) =>  (num1 + num2)
// A more concise version of the above function

const addtwo = (num1, num2) => ({ username: "akhshan" }); // Returns an object with a `username` property

// Log the result of the `addtwo` function
console.log(addtwo(3, 4)); // Logs the object: {username: "akhshan"}

// `forEach` method explained: It iterates over each element in the array and applies the provided function
myArray.forEach((element, index) => {
  console.log(`Element: ${element}, Index: ${index}`); // Logs each element with its index
});

//  ******************** Summery ***************** //

// This JavaScript code covers several concepts:

// Object Method (`welcomeMessage`):--
// The `user` object has a method called `welcomeMessage` that logs a message to the console using the `username` property.
// When `user.welcomeMessage()` is called, it logs the `username` and the `user` object itself.
// The `username` is then changed to "sam," and the `welcomeMessage` method is called again, displaying the updated `username`.

// Global `this` Context:--
// The code `console.log(this)`; at the global level logs the global `this` context (in a browser, this would be the `window` object).

// Function `this` Context:--
// The `chai` function logs `this.username`. In regular functions, `this` refers to the global object, but since the function is declared with `let`, `username` is scoped to the function and doesn't affect `this`.

// Arrow Functions:--
// Arrow functions do not have their own `this`. They inherit `this` from the surrounding context.
// `chai` defined as an arrow function logs `this` inherited from the surrounding scope.

// Arrow Function Variants:--
// Different variations of arrow functions are shown, such as returning a value directly, returning an object, etc.

// `forEach` Method:--
// The `forEach()` method is a built-in JavaScript array method that executes a provided function once for each array element.
