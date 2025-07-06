// let and const are block-scoped in JavaScript

// Block Scope Example
{
  let a = "Scoped with let";
  const b = "Scoped with const";
  console.log(a); // Works inside block
  console.log(b); // Works inside block
}

// if block with let/const
if (true) {
  let message = "Inside if block";
  const userStatus = "active";
  console.log(message); // Works
  console.log(userStatus);  // Works
}
//console.log(message); // ReferenceError
//console.log(userStatus);  // ReferenceError