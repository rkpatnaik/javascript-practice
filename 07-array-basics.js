/*
    JavaScript Arrays

    Arrays are used to store multiple values in a single variable.
    Each value is indexed starting from 0.
*/

// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true, null];
let empty = [];

// Accessing arrays
console.log("Array of strings:", fruits);
console.log("Array of numbers:", numbers);
console.log("Array of mixed types:", mixed);
console.log("Empty array:", empty);

// Accessing array elements
console.log("First fruit:", fruits[0]);     // "apple"
console.log("Third fruit:", fruits[2]);     // "orange"
console.log("Out-of-bound fruit:", fruits[3]); // undefined

// Checking array length
console.log("Length of mixed array:", mixed.length);  // 4

// Arrays are objects
console.log("Type of fruits:", typeof fruits);       // "object"

// Looping through arrays using for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Looping using for...of (cleaner for values)
console.log("Using for...of loop:");
for (let fruit of fruits) {
    console.log(fruit);
}