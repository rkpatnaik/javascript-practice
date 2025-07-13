/*
    Advanced Array Methods in JavaScript
    These methods allow you to copy, combine, and convert arrays in useful ways.
*/

// slice() – returns a shallow copy of part of an array
let colors = ["blue", "red", "orange", "green"];
let warmColors = colors.slice(1, 3);  // red, orange (end index not included)

console.log("Original colors array:", colors);
console.log("Sliced colors (1 to 3):", warmColors);

// concat() – joins two or more arrays into a new one
let freshFruits = ["apple", "banana"];
let exoticFruits = ["mango", "custard apple"];

let allFruits = freshFruits.concat(exoticFruits);

console.log("Fresh fruits:", freshFruits);
console.log("Exotic fruits:", exoticFruits);
console.log("All fruits (after concat):", allFruits);

// join() – joins all elements into a string with a separator
let names = ["John", "Jane", "Doe"];
let nameString = names.join(", ");    // default separator is comma

console.log("Joined string:", nameString); // John, Jane, Doe