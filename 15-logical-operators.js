/*
    Logical Operators in JavaScript
    These are used to combine or modify conditions inside if statements
*/

let isLoggedIn = true;
let isAdmin = true;

// AND: both conditions must be true
if (isLoggedIn && isAdmin) {
    console.log("Show admin dashboard");
} else {
    console.log("Access denied");
}

// OR: at least one condition must be true
if (isLoggedIn || isAdmin) {
    console.log("Show admin dashboard");
}

// NOT: reverse the condition
let isGuest = !isLoggedIn;
console.log("Is Guest:", isGuest);  // false