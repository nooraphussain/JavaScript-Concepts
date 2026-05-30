//Es6 features

// 1. let and const

// Definition
// New ways to declare variables with block scope.

// Theory
// Before ES6, we only had var, which is function-scoped and causes bugs.

// let → value can change
// const → value cannot be reassigned

// Example
let count = 10;
count = 20; // ✅ allowed

const PI = 3.14;
//PI = 3.14159; // ❌ error


//Block Scope
if (true) {
  let x = 10;
}
console.log(x); // ❌ ReferenceError

// Why used
// Prevents bugs from variable leakage
// Makes scope predictable


// Pitfalls
// const does NOT make objects immutable
const obj = { name: "Noor" };
obj = {name: 'Arun'} //❌ TypeError: Assignment to constant variable.
obj.name = 'Arun' // ✅ mutable
console.log(obj) 


// 2. Arrow Functions (=>)
// Definition
// Shorter syntax for writing functions.

// Theory
// Arrow functions don’t have their own this → they inherit it from parent.

// Normal function
function add(a, b) {
    return a + b;
  }

// Arrow function
const add = (a, b) => a + b;

//this behavior
const obj = {
    name: "Noor",
    greet: function () {
      setTimeout(() => {
        console.log(this.name); // ✅ "Noor" from parent funtion
      }, 1000);
    }
  };

const obj2 = {
name: "Noor",
greet: () => {
    console.log(this.name); //undefined
}
};


//3. Template Literals
// Definition

// Strings using backticks ` that allow interpolation.

// Theory

// Use ${} to embed variables or expressions.

// Example
const name = "Noor";
const msg = `Hello, ${name}!`;
// Multi-line
const text = `
Line 1
Line 2
`;


// 4. Destructuring

// Definition
// Extract values from arrays/objects easily.

// Theory
// Object destructuring
const user = { name: "Noor", age: 22 };
const { nam, age } = user;
//Array destructuring
const arr = [10, 20, 30];
const [a, b] = arr;



//5. Spread (...) and Rest (...)

// Definition
// Spread → expands elements
// Rest → collects elements

// 🧠 Theory
// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
// Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// 📌 Why used
// Copy arrays/objects
// Flexible function arguments

// ⚠️ Pitfalls
// Shallow copy only



// 6. Default Parameters

// Definition
// Set default values for function parameters.

function greet(name = "Guest") {
  return `Hello ${name}`;
}


// 7. Modules (import/export)

// Definition
// Split code into reusable files.

// Theory
// Export
export const add = (a, b) => a + b;
// Import
import { add } from "./math.js";

// 📌 Why used
// Clean architecture
// Reusability


// 8. Promises

// Definition
// Handle asynchronous operations.

// Theory
// States:
// Pending
// Resolved
// Rejected

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});

promise.then(res => console.log(res));

// 📌 Why used
// Avoid callback hell



//  9. async/await

// Definition
// Cleaner way to handle Promises.

async function fetchData() {
  const data = await fetch("https://api.com");
  console.log(data);
}

// 📌 Why used
// Looks like synchronous code


//  10. Classes

// Definition
// Blueprint for creating objects.

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// 📌 Why used
// OOP structure