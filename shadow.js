//Shadowing happens when a variable declared inside a block (like a function or block scope)
// has the same name as a variable in an outer scope.

let name = "Noora";

function greet() {
  let name = "Hussain"; // shadows outer 'name'
  console.log(name); // "Hussain"
}

greet();
console.log(name); // "Noora"


//Illegal Shadowing
//Illegal shadowing occurs when you try to redeclare a variable using let or const
// when the outer variable is declared with let or const, and the new declaration
//  is in an invalid scope (like redeclaring a block-level variable with var in an inner scope).

let x = 10;

function test() {
  var x = 20; // ❌ illegal shadowing
  console.log(x);
}

// let creates a block-scoped variable
// var creates a function-scoped variable
// You can't redeclare a let variable using var in a nested scope

let a = 10;

function test() {
  let a = 20; // ✅ legal shadowing
  console.log(a); // 20
}
test();
console.log(a); // 10
