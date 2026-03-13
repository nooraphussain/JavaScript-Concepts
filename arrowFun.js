//Regular Function vs Arrow function

//1. Regular Function

// 1. Definition
// A regular function is the traditional way to define functions in JavaScript using the function keyword.
// 2. Syntax Variations
// Function Declaration and Function Expression

function add(a, b) {
    return a + b;
  }
const add2 = function (a, b) {
    return a + b;
  };

// 3. Key Characteristics
// 3.1. Has its own this
// The value of this depends on how the function is called.
const user = {
    name: "Noorr",
    greet: function () {
      console.log(this.name);
    }
  };
  
  user.greet();

// 3.2. Can be used as Constructor
// Regular functions can create objects with new.
function Person(name) {
    this.name = name;
  }
  
  const p1 = new Person("Noorr");
  
  console.log(p1.name);

// 3.3. Has arguments object
// Regular functions provide an arguments object.
function sum() {
    console.log(arguments);
  }
  
  sum(1,2,3); //[1,2,3]


  // 4. Hoisting Works
// Function declarations are hoisted.



// 2. Arrow Function
// 1. Definition

// Arrow functions are a shorter syntax introduced in ES6.
// They are designed mainly for cleaner functional programming and callbacks.
const greet = (name) => {
    return "Hello " + name;
  };

// 2. Shorter Syntax
// Single Parameter

const square = x => x * x;

//Multiple Parameters
const add = (a, b) => a + b;

//No parameters
const greet2 = () => "Hello";


// 3. Key Characteristics
// 3.1. No Own this

// Arrow functions inherit this from the surrounding scope (lexical this).
const user2 = {
    name: "Noorr",
    greet: () => {
      console.log(this.name);
    }
  };
  
  user.greet(); //undefined
//Because `this` refers to global scope, not the object.


// 3.2 Cannot Be Used as Constructor
// Arrow functions cannot be used with new.

const Person = (name) => {
  this.name = name;
};

const p = new Person("Noorr");

// Error: Person is not a constructor


// 3.3. No arguments Object
// Arrow functions do not have arguments.

const sum = () => {
  console.log(arguments);
};

// Error.
// Instead use rest parameters.

const sum = (...nums) => {
  console.log(nums);
};

sum(1,2,3);


// 4. Not Hoisted
// Arrow functions behave like variables.

sayHi();

const sayHi = () => {
  console.log("Hi");
};
//Cannot access before initialization