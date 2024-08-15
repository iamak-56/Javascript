// Creating arrays //

const myArr = [0, 1, 2, 3, 4, 5];  // Array with numbers from 0 to 5
const myHeros = ["Iron-man", "Thor"];  // Array with superhero names

const myArr2 = new Array(1, 2, 3, 4, 5);  // Another way to create an array

// Accessing //

console.log(myArr[1]);  // Logs the second element of myArr, which is 1

// Array methods //

myArr.push(6);  // Adds 6 to the end of myArr
myArr.push(7);  // Adds 7 to the end of myArr
myArr.pop();    // Removes the last element (7) from myArr

myArr.unshift(9);  // Adds 9 to the beginning of myArr
myArr.shift();     // Removes the first element (9) from myArr

console.log(myArr.includes(9));  // Checks if 9 is in myArr (returns false)
console.log(myArr.indexOf(3));   // Finds the index of 3 in myArr (returns 3)

// Joining elements //

const newArr = myArr.join();  // Converts myArr to a string with elements separated by commas

console.log(typeof newArr);  // Logs the type of newArr, which is a string
console.log(newArr);         // Logs the string representation of myArr
console.log(myArr);          // Logs the current state of myArr

// Slice and Splice //

console.log("A", myArr);  // Logs the current state of myArr

const myn1 = myArr.slice(1, 3);  // Creates a new array from myArr, with elements from index 1 to 2
console.log(myn1);               // Logs the sliced array (elements at index 1 and 2)
console.log("B", myArr);         // Logs the unchanged myArr after slicing

const myn2 = myArr.splice(1, 3);  // Removes 3 elements from myArr, starting at index 1, and stores them in myn2
console.log("C", myArr);          // Logs the modified myArr after splicing
console.log(myn2);                // Logs the removed elements


// *********************** Summary *************************** //

// Array Creation // 

// ..Created arrays using both literal notation and 'new Array()'.

// Accessing Elements //

// ..Accessed the second element of 'myArr'.

// Array Methods//

// ..Used 'push()' to add elements to the end of the array.
// ..Used 'pop()' to remove the last element.
// ..Used 'unshift()' to add an element to the beginning.
// ..Used 'shift()' to remove the first element.
// ..Checked for an element with 'includes()'.
// ..Found the index of an element with 'indexOf()'.
// ..Converted the array to a string with 'j'oin()'.

// Slice vs Splice //

// ..'slice()' was used to create a new array without modifying the original.
// ..'splice()' was used to remove elements from the original array and store them in a new array.





