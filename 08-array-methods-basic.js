/*
    Basic Array Methods in JavaScript
    These methods help you add, remove, and search elements in arrays.
*/

let fruits = ["apple", "banana", "orange"];
console.log("Original array:", fruits);

// push() – Add element to the end
fruits.push("grapes");
console.log("After push():", fruits);

// unshift() – Add element to the beginning
fruits.unshift("mango");
console.log("After unshift():", fruits);

// pop() – Remove the last element
let lastFruit = fruits.pop();
console.log("After pop():", fruits);
console.log("Removed (pop):", lastFruit);

// shift() – Remove the first element
let firstFruit = fruits.shift();
console.log("After shift():", fruits);
console.log("Removed (shift):", firstFruit);

// indexOf() – Find the index of an element
let index = fruits.indexOf("banana");
console.log("Index of banana:", index); // returns -1 if not found (try with "kiwi")

// includes() – Check if array contains a value
console.log("Includes orange:", fruits.includes("orange"));   // true
console.log("Includes kiwi:", fruits.includes("kiwi"));       // false