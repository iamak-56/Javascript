const name = "Akhshan"; // Replace with actual name
const repoCount = 5; // Replace with actual repo count

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ak-Gaming-com')

console.log(gameName[0]);  // 'A'
console.log(gameName.__proto__);  // Shows the prototype object for strings


console.log(gameName.length);  // 13
console.log(gameName.toUpperCase());  // 'AK-GAMING-COM'
console.log(gameName.charAt(3));  // '-'
console.log(gameName.indexOf('g'));  // 7


const newString = gameName.substring(0, 4);
console.log(newString);  // 'Ak-G'

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);  // '' (empty string because the start index is greater than the end index)


const newStringOne  = "    Akhshan     ";
console.log(newStringOne);  // '    Akhshan     '
console.log(newStringOne.trim());  // 'Akhshan'


const url = "http://akhshan.com/akhshan%20akhshan";

console.log(url.replace('%20','-')); // 'http://akhshan.com/akhshan-akhshan'
console.log(url.includes('sundar')); // false

console.log(gameName.split('-')); // ['Ak', 'Gaming', 'com']

