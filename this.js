//The this keyword refers to the object that is executing the current function.
console.log(this); // In browser: `window`, In Node: `global`


//Inside an Object Method (this refers to that object)
const user = {
    name: "Noora",
    greet() {
      console.log(this.name);
    }
  };
user.greet(); // "Noora"

  
//Arrow Functions (Lexical this)
const user2 = {
    name: "Noora",
    greet: () => {
      console.log(this.name);
    }
  };
  
user2.greet(); // undefined (because `this` is not bound to `user`)


//Constructor Function (this refers to new object)
function Person(name) {
    this.name = name;
  }
  
const p1 = new Person("Noora");
console.log(p1.name); // "Noora"
  

//'this substitution' is a concept in how non-strict mode handles 'this' when it's null or undefined.
// In non-strict mode, if a function is called with this as null or undefined,
// JavaScript automatically substitutes it with the global object (window in browser, global in Node

function show() {
    console.log(this);
}

show.call(null);      // window (in browser)
show.call(undefined); // window (in browser)

"use strict";

function show() {
  console.log(this);
}

show.call(null);      // null
show.call(undefined); // undefined
