/*
    Javascript conditionals (if / else / else if)
    Conditionals allow us to run different blocks of code based on certain conditions.
*/

// if statement
let age = 35;

if (age >= 18) {
    console.log("You are an adult.");
}

// if...else statement
let isRaining = false;

if (isRaining) {
    console.log("Take an umbrella.");
} else {
    console.log("No need for an umbrella");
}

// Multiple if...else statements
let score = 45;

if (score >= 75){
    console.log("Grade: A");
} else if (score >= 60) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}