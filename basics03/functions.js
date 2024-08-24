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