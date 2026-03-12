// 1. Pass by Value
// 1. Definition

// Pass by value means:

// A copy of the value is passed to a variable or function.
// Changes to the new variable do not affect the original value.

// So two variables hold independent values in memory.

let a = 10;
let b = a;

console.log(b); // 10
b = 20;

console.log(a); // 10
console.log(b); // 20

// Primitive values are copied.

// Primitive types include:
// Number
// String
// Boolean
// Undefined
// Null
// BigInt
// Symbol




// 2. Pass by Reference
// 1. Definition

// Pass by reference means:

// Instead of copying the value, the memory address (reference) is copied.

// So two variables point to the same object in memory.

let obj1 = { age: 20 };
let obj2 = obj1;

obj2.age = 30;

console.log(obj1.age); // 30

// Types That Use Reference
// Non-primitive types:

// Object
// Array
// Function
// Map
// Set
// Date

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1,2,3,4]

function updateUser(user) {
    user.name = "John";
  }
  
  let person = { name: "Noorr" };
  
  updateUser(person);
  
  console.log(person.name); // John 
//The object inside the function modifies the original object.



//How to Avoid This (Copy Objects)
//Method 1 — Spread Operator
let obj2 = { ...obj1 };
let arr3 = [...arr1];

//Method 2 — Deep Copy
let copy = JSON.parse(JSON.stringify(obj));
