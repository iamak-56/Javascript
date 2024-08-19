//  Singleton
// Object.create
// Object literals

// Create a unique symbol
const mySym = Symbol("key1")

// Define an object literal JsUser with various properties
const JsUser = {
    name:"Akhshan",  // String property
    "full name": "Mohd Akhshan Qamar",  // String property with a space in the key name
    [mySym]:"myKey1",  // Property with a Symbol as the key
    age:18,  // Number property
    location:"Gaya",  // String property
    email:"akhshanqamarbdn26@gmail.com",  // String property
    isloggedIn: false,  // Boolean property
    lastLoginDays:["Monday", "Saturday"]  // Array property
}

// Accessing the email property in two different ways
console.log(JsUser.email);  // Output: "akhshanqamarbdn26@gmail.com"
console.log(JsUser["email"]);  // Output: "akhshanqamarbdn26@gmail.com"

// Accessing the "full name" property using bracket notation
console.log(JsUser["full name"]);  // Output: "Mohd Akhshan Qamar"

// Accessing the property with the Symbol key
console.log(JsUser[mySym]);  // Output: "myKey1"

// Changing the email property
JsUser.email = "Akhshan@chatgpt.com"

// Freezing the object to prevent further modifications
Object.freeze(JsUser)

// Attempting to change the email property after freezing (this will not work)
JsUser.email = "Akhshan@microsoft.com"

// Output the object, email will still be "Akhshan@chatgpt.com"
console.log(JsUser);  // Output: { name: "Akhshan", "full name": "Mohd Akhshan Qamar", [Symbol(key1)]: "myKey1", age: 18, location: "Gaya", email: "Akhshan@chatgpt.com", isloggedIn: false, lastLoginDays: ["Monday", "Saturday"] }

// Adding a method to the object that logs a greeting
JsUser.greeting = function () {
    console.log("Hello JS User");
}

// Adding another method that uses the name property in the greeting
JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name} `);
}

// Calling the greeting method
console.log(JsUser.greeting());  // Output: "Hello JS User", then undefined because the function doesn't return anything

// Calling the second greeting method
console.log(JsUser.greetingTwo());  // Output: "Hello JS User, Akhshan", then undefined because the function doesn't return anything


// ********************** Summary ************************* //

// Key Concepts:

// Object Literal:-- The 'JsUser' object is created using object literal syntax, which is a straightforward way to create an object.

// Symbol:-- 'mySym'' is a unique key used to add a property to the 'JsUser' object.

// Property Access:-- Properties can be accessed using dot notation ('JsUser.email') or bracket notation ('JsUser["email"]').

// Object.freeze:-- This method makes the object immutable, preventing any further changes to its properties.

// Methods:-- The object has methods ('greeting' and 'greetingTwo') that can be invoked to perform actions.





