/*
    Higher-Order Array Methods in JavaScript
    These methods use callback functions to transform or filter array data.
*/

// map() – transform each element and return a new array
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);

console.log("Original numebrs:", numbers);
console.log("Doubled numbers (map):", doubled);

// filter() – return elements that meet a condition
let ages = [15, 22, 18, 30, 12];
let adults = ages.filter(age => age >= 18);

console.log("Original ages:", ages);
console.log("Adults (filter):", adults);

// reduce() – reduce array to a single value
let prices = [10, 20, 30];
let total = prices.reduce((sum, price) => sum + price, 0);

console.log("Prices:", prices);
console.log("Total (reduce):", total);

/*
    Challenge: Sum the Total Salary of Employees
    You're given an array of employee objects. Each object has a name and a salary.
    Task: Use .reduce() to calculate the total salary.
*/

let employees = [
    { name: "Alice", salary: 40000 },
    { name: "Bob", salary: 55000 },
    { name: "Charlie", salary: 60000 }
]

let totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total salary:", totalSalary);

// Use .reduce() to create a comma-separated string of names from the above array:

let employeeNames = employees.map(emp => emp.name).join(", ");
console.log("Employee names:", employeeNames);