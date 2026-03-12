//Types of functions 
//Based on declaration
//1.Function declarartion / Named function  - hoisted
sayHello()
function sayHello(){
    console.log("Hello there!")
}

//2.Function expression - not hoisted , assigned to a variable
const sayBye = function (){
    console.log("Bye, see you soon")
}
sayBye()

//3.Named function expression
const askName = function name(){
    console.log("What's your name?")
}
askName()

//4.Anonymous function
setTimeout(function(){
    console.log("I'm printing after 1 seconds")
 }, 1000)


//5.Arrow function
//they don't have their own this context; they inherit it from the surrounding scope (lexical this).
// Arrow functions also implicitly return if the body is a single expression.
const square = n => console.log(n*n);
square(6);

//Based on behaviour
//6.IIFE
//Its primary purpose is to create a new scope, preventing variable hoisting and pollution of the global scope.

(function() {
    console.log("I run immediately!");
})();

//7.HOF
function calculate(arr, fn){
    return arr.map(fn);
}

function sqr(n) {
    return n*n;
}
console.log(calculate([1,2,3], sqr));

//8.callback
setTimeout(() => console.log("Done!"), 500);

//Based on purpose
//9.Construction function - Used to create objects with 'new'
function Person(name){
    this.name = name;
}
const person = new Person('Noora');

//10.Generator function - Can pause and resume execution using 'yield'.
function* gen() {
    yield 1;
    yield 2;
}

//11.Async function - Returns a 'promise' and uses 'await' for async operations
async function fetchData() {
    return "Data loaded";
}

//Special function
//12.Recursive function
function countdown(n) {
    if (n > 0) {
        console.log(n);
        countdown(n - 1);
    }
}

//13.Pure function
function add(a, b) {
    return a + b;
}
