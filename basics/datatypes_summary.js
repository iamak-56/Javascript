// primitive

// 7 types : String , Number, Boolean, null, undifined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

// const bigNumbar = 3544687534757864n


// reference (non primitive0)

// array, objects, functions
    

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name:"Akhshan",
    age: 21,
}

const myFunction = function () {
    console.log("hello World");
}

console.log(typeof bigNumbar);
console.log(typeof outsideTemp);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3




// ****************************************************

//  Stack memory (primitive), Heap memory (non-Primitive)
// stack memory (All the numbers, booleans, all these are inside the stack and whenever something is added to the stack, only its copy will be found.)
// Heap memory (Whenever you put something inside the heap, you get its reference only.)

let MyYubetubename = "AkhshanqamarGaming"

let anothername = MyYubetubename
anothername = "AKgaming"


console.log(anothername);
console.log(MyYubetubename);


let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "Akhshan@google"

console.log( userOne.email);
console.log( userTwo.email);


 