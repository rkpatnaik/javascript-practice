// 'var' was commonly used before ES6 — it's function-scoped
var firstName = "John";
console.log(firstName);

var flag = true;
console.log(flag);

// 'let' is block-scoped and introduced in ES6 — preferred for variables that change
let age = 30;
console.log(age);

// Variables declared with 'var' or 'let' can be reassigned
let city = "London";
city = "Mumbai";
console.log(city);

// 'const' is used for variables that should not be reassigned (constants)
const country = "South Africa";
console.log(country);