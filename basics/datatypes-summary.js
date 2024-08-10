// primitive

// 7 types : String , Number, Boolean, null, undifined, symbol, 
BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = symbol ('123')

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