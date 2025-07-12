/*
    JavaScript Arrays

    Arrays are used to store multiple values in a single variable.
    Each value is indexed starting from 0.
*/

// Creating arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

let numbers = [1, 2, 3, 4, 5]
console.log(numbers);

let mixed = ["text", 42, true, null]
console.log(mixed);

let empty =[];
console.log(empty);

// Accessing array element
console.log(fruits[0]);     // "apple"
console.log(fruits[2]);     // "orange"
console.log(fruits[3]);     // undefined (index out of bounds)

// Checking array length
console.log(mixed.length);  // 4

// Arrays are objects
console.log(typeof fruits); // "object"

// Adding elements
fruits.push("grapes");      // Add to end
fruits.unshift("mango");    // Add t start
console.log(fruits);

// Removing elements
fruits.pop();               // Removes last element
fruits.shift();             // Removes first element
console.log(fruits);

// Updating elements
fruits[1] = "strawberries"
console.log(fruits);

// Looping through arrays
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

/*
    'for...of' loop is a clean and readable way to loop through arrays without worrying about indexes (i) or length.
    'for...of' loop works for Array, Strings but not for Objects   
*/
console.log("Using for...of loop:");
for (let fruit of fruits) {
    console.log(fruit);
}

// Useful methods
console.log(fruits.indexOf("strawberries"));    // 1
console.log(fruits.includes("kiwi"));           // false

/*
    .join(): It joins all elements of the array into a single string
    Separates each element using the separator you provide e.g. "| " or ", "
*/
console.log(fruits.join("| "));

// Arrays are objects
console.log(typeof fruits);             // "object"
console.log(Array.isArray(fruits));     // true