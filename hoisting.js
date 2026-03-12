//Hoisting is JavaScript’s behavior of moving variable and function declarations 
// to the top of their scope before the code is executed.

console.log(a); // undefined (not error!)
var a = 5;


//console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10; //tdz
//The TDZ helps prevent unexpected behavior caused by accessing uninitialized variables,
// promoting cleaner and more predictable code.


//functions are hoisted 
sayHi(); 

function sayHi() {
  console.log("Hello!");
}

//function expressions are not hoisted
sayBye();

var sayBye = () => {
    console.log('Bye')
}

var a = 1;

function test() {
  console.log(a);
  var a = 2;
}
test();
//Inside test(), var a is hoisted and shadows the outer a. So the local a is undefined at the time of console.log(a).