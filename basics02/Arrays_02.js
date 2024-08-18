const marvel_heros = ["Thor", "Ironman", "SpiderMan" ];
const dc_heros = ["Superman", "flash", "batman"];

// Pushes the entire 'dc_heros' array as a single element into 'marvel_heros'

marvel_heros.push(dc_heros);

console.log(marvel_heros); 

// Output: ["Thor", "Ironman", "SpiderMan", ["Superman", "flash", "batman"]]
// The 'marvel_heros' array now has 4 elements, where the last element is the entire 'dc_heros' array.

console.log(marvel_heros[3][1]);

// Output: "flash"
// Accesses the second element (index 1) of the 'dc_heros' array, which is "flash".

// Concatenates 'marvel_heros' and 'dc_heros' arrays, making a new array

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); 

// Output: ["Thor", "Ironman", "SpiderMan", ["Superman", "flash", "batman"], "Superman", "flash", "batman"]
// The 'allHeros' array includes the nested 'dc_heros' array as well as the individual elements of 'dc_heros'.

// Uses the spread operator to combine the elements of both arrays into a new array

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); 

// Output: ["Thor", "Ironman", "SpiderMan", ["Superman", "flash", "batman"], "Superman", "flash", "batman"]
// Similar to 'concat', but using spread syntax.

const Another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattens the 'Another_Array' to remove any nested arrays, 'Infinity' level means flatten completely

const real_Another_Array = Another_Array.flat(Infinity);
console.log(real_Another_Array); 

// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// All nested arrays are flattened into a single-level array.

console.log(Array.isArray("Akhshan"));

// Output: false
// Checks if "Akhshan" is an array, which it is not.

console.log(Array.from("Akhshan"));

// Output: ["A", "k", "h", "s", "h", "a", "n"]
// Converts the string "Akhshan" into an array of its characters.

console.log(Array.from({name: "Akhshan"})); 

// Output: []
// The object does not have an iterable property, so it returns an empty array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

// Output: [100, 200, 300]
// Creates an array with the given arguments as elements.


// **************************** Summary ************************** //

// push(): Adds an entire array as a single element into another array.
// concat(): Combines two arrays, but doesn’t affect nested arrays.
// spread operator (...): Expands arrays but doesn't flatten nested arrays.
// flat(): Flattens nested arrays to a specified depth (or infinitely if needed).
// Array.isArray(): Checks if a value is an array.
// Array.from(): Converts an iterable (like a string) into an array.
// Array.of(): Creates an array from given arguments.