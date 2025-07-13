/*
    Array Sorting Methods in JavaScript

    reverse() – reverses the order of the array (modifies original)
    sort() – sorts elements alphabetically or by custom logic
*/

// reverse() – reverses array in-place
let colors = ["red", "blue", "green", "yellow"];
console.log("Original colors:", colors);

colors.reverse();
console.log("Reversed colors:", colors);

// sort() – sorts strings alphabetically
let fruits = ["banana", "apple", "mango", "grape"];
console.log("Original fruits:", fruits);

fruits.sort();
console.log("Sorted fruits:", fruits);

// sort() on numbers (needs compare function)
let numbers = [10, 5, 20, 2, 8];
console.log("Original numbers:", numbers);

// Sort ascending
numbers.sort((a, b) => a - b);
console.log("Sorted numbers (asc):", numbers);

// Sort ascending
numbers.sort((a, b) => a - b);
console.log("Sorted numbers (asc):", numbers);

// Sort descending
numbers.sort((a, b) => b - a);
console.log("Sorted numbers (desc):", numbers);