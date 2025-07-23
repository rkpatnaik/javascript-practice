/*
    Javascript Strings

    Strings are used to store texts. They are immutable and can be created using single(' '), double(" ") or backticks (` `)
*/

// Create strings
let singleQuote = 'Hello';
let doubleQuote = "Ranjan";
let backticks = `Hello, Ranjan`;

console.log("Single:", singleQuote);
console.log("Double:", doubleQuote);
console.log("Backticks:", backticks);

// Join strings (Concatenate)
let firstName = "Ranjan";
let lastName = "Patnaik";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

/* 
    Template Literal
    
    A template literal is a way to create strings in JavaScript using backticks ( ` ) instead of single ' or double quotes ".
    
    It allows us to insert variables directly into the string using ${...}
*/
let greeting = `Hi, my name is ${firstName} ${lastName}.`;
console.log("Template Literal:", greeting);

// Multi-line Strings
let bio = `Hi, I'm Ranjan.
I am learning JavaScript.
This is my journey.`;
console.log(bio);

// String length
console.log("Length of bio:", bio.length);

// Access characters in a string
console.log("First character:", firstName[0]);
console.log("Last character:", lastName[lastName.length-1]);

// String methods
let message = "  I am learning Javascript.  ";

// toUpperCase() - converts to uppercase
console.log("toUpperCase:", message.toUpperCase());

// toLowerCase() - converts to lowercase
console.log("toLowerCase:", message.toLowerCase());

// trim() - removes whitespace from both ends
console.log("trim():", message.trim());

// trimStart() - removes whitespace from start
console.log("trimStart():", message.trimStart());

// trimEnd() - removes whitespace from end
console.log("trimEnd():", message.trimEnd());

// inculdes(substring) - checks if substring exists
console.log("includes():", message.includes('Cape Town'));

// startsWith(substring) - checks if string starts with substring
console.log("startsWith():", message.startsWith('  I'));

// endsWith(substring) - checks if string ends with substring
console.log("endsWith():", message.endsWith('Javascript.  '));

// replace(oldString, newString) - replaces first match
newMessage = "I am learning Javascript and Javascript."
console.log("replace():", newMessage.replace('Javascript', 'Typescript'));

// split(separator) - 	Splits into array by separator
console.log("split():", message.trim().split(" "));