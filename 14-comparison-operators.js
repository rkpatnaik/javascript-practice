/*
    JavaScript Comparison Operators
    Used in if/else conditions to compare values.
*/

let x = 5;
let y = 10;

// Equal (loose equality ==) – compares values only
console.log(x == "5");      // true (type is ignored)

// Strict Equal (strict equality ===) – compares value and type
console.log(y === "5");     // false (number !== string)

// Not Equal (loose)
console.log(x != "20");      // true

// Strict Not Equal
console.log(y !== 10);       // false (type and value are same)

// Greater Than / Less Than
console.log(x > y);          // false
console.log(x < y);          // true

// Greater Than or Equal
console.log(x >= 5);        // true

// Less Than or Equal
console.log(y <= 8);        // false