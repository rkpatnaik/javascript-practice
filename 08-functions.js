/*
    Javascript Functions

    Functions are reusable blocks of code that perform a specific task.
    They help avoid repeating code and make your programs more modular.
*/

// Function declaration
function greet() {
    console.log("Hello everyone!");
}
greet();    // calls the function

// Function with parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("John");
greetUser("Jenny");

// Function that returns a value
function add(a, b) {
    let sum = a + b;
    return sum;         // return a + b; also functionally identical
}
let result = add(5, 4);
console.log("Addition: ", result);

/*
    Function Expression that is assigned to a variable

    You define a function and assign it to a variable (sayBye)
    The function is anonymous, it does not have its own name
    You can now call that function using the variable name
*/
const sayBye = function(name) {
    console.log("Hello, " + name + "!");
};
sayBye("Ranjan");

// Arrow function (introduced in ES6 or modern Javascript)
const multiply = (x, y) => {
    return x * y;
}
let resultValue = multiply(2, 3);
console.log("Multiplication: " + resultValue);

// Short arrow function (if only one expression)
const square = num => num * num;
console.log("Square of 6:", square(6));