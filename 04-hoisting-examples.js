/*
    In JavaScript, declarations (variables and functions) are "hoisted" to the top of their scope — before the code is executed.
*/

// var is hoisted
console.log(a); // undefined — variable is hoisted but not its value
var a = 10;
console.log(a); // 10

/*
    let and const are hoisted too — but they remain in a “temporal dead zone” (TDZ) until their actual declaration line is reached. You cannot access them before they're defined.
*/
console.log(firstName); // ReferenceError: Cannot access 'firstName' before initialization
let firstName = "Ranjan";
console.log(firstName); // Ranjan