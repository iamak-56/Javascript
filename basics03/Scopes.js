// Declaring variables
var c = 300;  // 'var' is function-scoped or globally scoped
let a = 300;  // 'let' is block-scoped

// Starting a new block scope
if (true) {
  let a = 10;       // This 'a' is block-scoped and only exists inside this block
  const b = 20;     // 'b' is also block-scoped and only exists inside this block
  console.log("INNER:", a);  // Logs: "INNER: 10"
}

// Outside the block
console.log(a);  // Logs: 300 (this refers to the 'a' declared outside the block)
console.log(b);  // Error: b is not defined (because 'b' is only available inside the block)
console.log(c);  // Logs: 300 (c is globally scoped due to 'var')

// Function one definition
function one() {
    const username = "Akhshan";  // 'username' is block-scoped to the function 'one'

    function two() {
        const website = "Youtube";  // 'website' is block-scoped to the function 'two'
        console.log(username);  // Logs: "Akhshan" (accessing 'username' from the outer function 'one')
    }

    console.log(website);  // Error: website is not defined (because 'website' is only available inside 'two')
    two();  // Calls the function 'two'
}
one();  // Calls the function 'one'

// Another block scope
if (true) {
    const username = "Akhshan";  // Block-scoped 'username' variable
    if (username === "Akhshan") {
        const website = "Youtube";  // Block-scoped 'website' variable
        console.log(username + website);  // Logs: "AkhshanYoutube"
    }
    console.log(website);  // Error: website is not defined (because 'website' is only available inside the inner 'if' block)
}
console.log(username);  // Error: username is not defined (because 'username' was block-scoped and not accessible here)

// ******************** interesting ******************** //

// Function declaration is hoisted, so we can call it before it's defined
console.log(addone(5));  // Logs: 6

function addone(num) {
    return num + 1;  // Adds 1 to the passed number
}

// Function expression is not hoisted, so it must be defined before it can be used
const addtwo = function(num) {
    return num + 2;  // Adds 2 to the passed number
};
console.log(addtwo(5));  // Logs: 7


//  ********************** Key Comcepts ********************* //

// Hoisting:-- Function declarations are hoisted, meaning they can be called before they are defined. However, function expressions are not hoisted.

// Block Scope:-- Variables declared with `let` and `const` are block-scoped, meaning they only exist within the block they're declared in.

// Global vs Local Scope:-- Variables declared with `var` are either globally or function-scoped, not block-scoped like `let` or `const`.

// Nested Functions:-- Inner functions have access to variables in their outer functions, but not vice versa.





