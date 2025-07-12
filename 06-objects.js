/*
    A JavaScript object is a collection of key-value pairs.
    It’s used to represent structured data.
*/

// Creating an object
let person = {
  name: "Ranjan",
  age: 35,
  isStudent: false
};

// You can access properties using dot notation or bracket notation.
console.log(person.name); // "Ranjan"
console.log(person["age"]); // "35"

// Creating an object
let car = {
    make: "Toyota",
    model: "Urban Cruiser",
    year: 2022,
    isElectric: false
}

// Adding/Updating properties
car.color = "white";     // Add new property
car.year = 2025;        // Update existing property
console.log(car);

// Deleting property
delete person.isStudent;
console.log(person);       // no isStudent key

// Nested objects
let employee = {
    name: "Ranjan",
    address: {
        city: "Cape Town",
        country: "South Africa"
    }
};

console.log(employee);
console.log(employee.address.city);     // "Cape Town"

// typeof operator on an objet will return 'object'
console.log(typeof employee);

/*
    In JavaScript, functions can be used as values in objects.
    They're called methods of that object.

    'this' refers to the object that is executing the current function.
*/

let user = {
    name: "Ranjan",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

user.greet();   // "Hello, Ranjan"