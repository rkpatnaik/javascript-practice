/*
    JavaScript has two broad categories of data types:
    1. Primitive types — simple, immutable values stored by value.
    2. Reference types — complex structures like objects and arrays stored by reference.
*/

// Primitive types

// String
let firstName = "Ranjan"
console.log(typeof firstName); // "string"

// Number
let age = 30;
let score = 85.5;
console.log(typeof age); // "number"
console.log(typeof score); // "number"

// Boolean
let isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"

// Undefined (declared but not assigned)
let x;
console.log(typeof x); // "undefined"

// Null (intentional absence of value)
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a known JavaScript bug)

// BigInt (very large integers)
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// Symbol (unique identifiers)
let id = Symbol("userId");
console.log(typeof id); // "symbol"

//Even if two symbols have the same description, they’re not equal
let s1 = Symbol("id");
let s2 = Symbol("id");
console.log(s1 === s2); // false


// Reference Types (Objects)

// Object
let person = {
  name: "Ranjan",
  city: "Cape Town",
};
console.log(typeof person); // "object"

// Array (a type of object)
let colors = ["red", "green", "blue"];
console.log(typeof colors); // "object"
console.log(Array.isArray(colors)); // true

// Function (special type of object)
function greet() {
  console.log("Hello!");
}
console.log(typeof greet); // "function"