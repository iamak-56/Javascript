// Function to print each letter of the name "AKHSHAN" on a new line
function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("H");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
  }
  
  // Calling the function to display the name "AKHSHAN"
  sayMyName();
  
  // First version of addTwoNumbers function (this will be overwritten by the second version)
  function addTwoNumbers(number1, number2) {
    console.log(number1 + number2); // This logs the sum of number1 and number2 to the console
  }
  
  // Second version of addTwoNumbers function (this is the one that will be used)
  function addTwoNumbers(number1, number2) {
    let result = number1 + number2; // Calculate the sum and store it in 'result'
    return result; // Return the result
    return number1 + number2; // This line will never run because the function returns before it
  }
  
  // Call the addTwoNumbers function with 3 and 4 as arguments and store the result
  const result = addTwoNumbers(3, 4);
  
  // Log the result of the addition to the console
  console.log("Result:", result); // Output will be "Result: 7"
  
  // Function to log a user login message, with a default username of "sam"
  function loginUserMessage(username = "sam") {
    if (username === undefined) {
      console.log("please enter a username"); // This line is not needed because of the default parameter
      return; // Stop the function if no username is provided
    }
    return `${username} just logged in`; // Return a message saying the user just logged in
  }
  
  // Log the login message for the username "Akhshan"
  console.log(loginUserMessage("Akhshan")); // Output will be "Akhshan just logged in"
  
  // Log the login message for the username "akhshan"
  console.log(loginUserMessage("akhshan")); // Output will be "akhshan just logged in"

  
//  ********************* Summary ************************** //


// The 'sayMyName' function prints each letter of "AKHSHAN" on a new line.
// There are two versions of the 'addTwoNumbers' function. The second version calculates and returns the sum of two numbers. The first version is overwritten.
// The 'loginUserMessage' function logs a message saying the user has logged in, with a default username of "sam" if no other name is provided. The 'if' condition checking for 'undefined' is unnecessary because the default value is used when 'username' is not provided.




// Function to calculate cart price with a variadic parameter (num1)
function calculateCartPrice(val1, val2, ...num1){
  return num1;  // Returns the remaining arguments as an array
}

console.log(calculateCartPrice(200, 400, 500, 2000));  
// Output: [500, 2000] 
// Explanation: The function returns the remaining arguments passed after the first two.

// Creating a user object with username and prices properties
const user = {
username: "akhshan",
prices: 599
}

// Function to handle an object and print out its properties
function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// Logs the username and price properties of the passed object
}

handleObject(user);
// Output: Username is akhshan and price is undefined 
// Explanation: The function prints out the username and price of the "user" object.
// Notice there is a typo in the object key, it should be `prices` instead of `price`.

handleObject({
username: "Sam",
price: 399
});
// Output: Username is Sam and price is 399
// Explanation: It prints out the username and price from the object passed directly.

// Array of numbers
const myNewArray = [200, 100, 400, 600];

// Function to return the second value from an array
function returnSecondValue(getArray){
return getArray[1];  // Returns the second element of the array
}

console.log(returnSecondValue(myNewArray));
// Output: 100 
// Explanation: The function returns the second value of the array myNewArray.

console.log(returnSecondValue([200, 400, 500, 1000]));
// Output: 400 
// Explanation: The function returns the second value of the new array passed as an argument.


//  *********************** Summary ********************** //

// calculateCartPrice function:- Returns the additional arguments passed after the first two as an array.
// handleObject function:- Logs the `username` and `price` properties of an object, though there is a typo (`prices` vs `price`) in the initial user object.
// returnSecondValue function:- Returns the second value of any given array.