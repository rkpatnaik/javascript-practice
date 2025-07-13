/*
    Loops in JavaScript
    Loops are used to run a block of code multiple times, often with different values each time.
*/

// for loop - used when you know how many times to repeat something
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// while loop - runs a block of code as long as the condition is true
let count = 1;

while (count <= 5) {
    console.log("Count is:", count);
    count++;
}

// do...while loop - runs the code at least once, then repeats while the condition is true
let number = 6;

do {
    console.log("Number is:", number);
    number++;
} while (number <= 5);

// for...of loop – loops over values of arrays or strings
let colors = ["blue", "green", "red"];

for (let color of colors) {
    console.log(color);
}

// for...in loop (used for objects) – loops over property names (keys)
let person = {
    name: "Ranjan",
    age: 38,
    city: "Johannesburg"
};

for (let key in person) {
    console.log(key + ":", person[key]);
}