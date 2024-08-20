// Define an empty object using two different syntaxes
// const InstagramUser = new Object();
const InstagramUser = {}; // This line will cause an error because you're trying to redeclare a constant variable.

// Setting properties for the InstagramUser object
InstagramUser.id = "123abc";
InstagramUser.name = "john_doe";
InstagramUser.isloggedIn = false;

console.log(InstagramUser); // Output: { id: '123abc', name: 'john_doe', isloggedIn: false }

// Define a regular user object with nested properties
const regularUser = {
  email: "Some@gmail.com",
  fullname: {
    Userfullname: {
      firstname: "John",
      lastname: "Doe",
    },
  },
};

console.log(regularUser.fullname.Userfullname.firstname); // Output: John

// Define three objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// Combine obj1 and obj2 into obj3
// const obj3 = { obj1, obj2 }; // This creates a nested object, not a flat merged object.
// const obj3 = Object.assign({}, obj1, obj2, obj4); // This merges all properties into a new object, overwriting the previous obj3 definition.
const obj3 = { ...obj1, ...obj2 }; // This will merge obj1 and obj2, overwriting the previous obj3 definition again.

console.log(obj3); // Output: { 1: 'a', 2: 'b', 3: 'a', 4: 'b' }

// Define a user array with syntax errors
const user = [
  {
    id: 1,
    email: "Ak@gmail.com",
  },
  {
    id: 2, // Updated id to 2 to avoid identical keys
    email: "Bk@gmail.com", // Changed email to avoid duplicates
  },
  {
    id: 3, // Updated id to 3
    email: "Ck@gmail.com", // Changed email to avoid duplicates
  },
];

console.log(user[1].email); // Output: "Bk@gmail.com"

// Displaying the InstagramUser object again
console.log(InstagramUser); // Output: { id: '123abc', name: 'john_doe', isloggedIn: false }

// Display keys, values, and entries of InstagramUser
console.log(Object.keys(InstagramUser)); // Output: [ 'id', 'name', 'isloggedIn' ]
console.log(Object.values(InstagramUser)); // Output: [ '123abc', 'john_doe', false ]
console.log(Object.entries(InstagramUser)); // Output: [ [ 'id', '123abc' ], [ 'name', 'john_doe' ], [ 'isloggedIn', false ] ]

// Check if the property 'islogged' exists in InstagramUser
console.log(InstagramUser.hasOwnProperty("islogged")); // Output: false

//  ********************* Issues ******************** //

// Redeclaration of Constants:- The 'InstagramUser' object is being declared twice using 'const'. This will cause an error. In JavaScript, you can't redeclare a constant variable.
// Incorrect User Array Syntax:- The 'user' object should be defined as an array of objects, and the syntax should be corrected for accessing individual objects.
// Merging Objects:- The 'obj3' variable is being redefined multiple times, which may lead to confusion. The final version should merge all the objects.
// Property Check:- The last 'console.log' statement checks for a property that doesn't exist ('islogged' instead of 'isloggedIn').
// These comments should help in understanding the code and debugging any issues.

//  *********************** Summary ****************** //

// Creating and Modifying Objects:
// You create an 'InstagramUser' object and set properties like 'id', 'name', and 'isloggedIn'.
// The 'console.log(InstagramUser);' prints the object.

// Accessing Object Properties:
// A 'regularUser' object is defined with nested properties for 'email', 'fullname', and 'Userfullname'.
// The code accesses and prints the firstname of the user using 'console.log(regularUser.fullname.Userfullname.firstname);'.

// Merging Objects:
// Objects 'obj1', 'obj2', and 'obj4' are created with numbered keys and string values.
// The code attempts to merge 'obj1' and 'obj2' into 'obj3' using two different approaches:
// ..Using 'Object.assign()', which combines all objects into a new one.
// ..Using the spread operator ('...'), which does the same.
// The merged object is printed.

// Incorrect User Object Creation:
// There is an attempt to create a 'user' object with multiple entries without proper syntax, leading to an error. Each entry should be inside an array or separated correctly.

// Object Property Access and Checks:
// The code checks if 'InstagramUser' has a specific property using 'InstagramUser'.hasOwnProperty('islogged');, but this is looking for the wrong property name ('islogged' instead of 'isloggedIn').

// Using Object Methods:
// 'Object.keys()', 'Object.values()', and 'Object.entries()' methods are used to get the keys, values, and key-value pairs of the 'InstagramUser' object.

// Key Points:
// Objects in JavaScript are collections of key-value pairs.
// Properties can be accessed and modified using dot notation.
// Objects can be merged using 'Object.assign()' or the spread operator (...).
// Careful attention is needed to syntax, especially when creating objects with multiple entries.
