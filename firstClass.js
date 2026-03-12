// 🔹 First-order Function
// A first-order function is just a normal function that:
// Does NOT take another function as an argument
// Does NOT return another function

// First-order function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5


//  What are First-Class Functions?

// In JavaScript, **functions are treated as values**, just like numbers, strings, or objects.
// This means functions can be:

// 1. **Assigned** to variables
// 2. **Passed** as arguments to other functions
// 3. **Returned** from functions
// 4. **Stored** in data structures (like arrays, objects, etc.)

//When a language allows this, it is said to have **first-class functions**.

// 1. Assigning a function to a variable


const sayHello = function() {
  console.log("Hello!");
};

sayHello(); // Hello!

// 2. Passing a function as an argument (Callback)
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Noora", sayBye);


//3. Returning a function from another function
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10


//4. Storing functions in objects
const calculator = {
  add: function(a, b) { return a + b; },
  subtract: function(a, b) { return a - b; }
};

console.log(calculator.add(5, 3)); // 8

//5. **Storing functions in arrays**

const funcs = [
  () => console.log("First"),
  () => console.log("Second")
];

funcs[0](); // First
funcs[1](); // Second

//  Why are First-Class Functions Important?

// Because of this feature:

// * We can use **callbacks** (e.g., `setTimeout`, event listeners).
// * We can use **higher-order functions** (functions that take or return other functions).
// * Functional programming techniques (like `map`, `filter`, `reduce`) become possible.
// * We can implement **closures**.