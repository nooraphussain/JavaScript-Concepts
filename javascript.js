// A high-level, interpreted/JIT-compiled programming language mainly used to make web pages
//  interactive and dynamic.


// Originally, JavaScript was created to run inside browsers.
// Today it is used for:

//  Frontend web development
//  Backend development
//  Mobile apps
//  Desktop apps
//  Game development
//  APIs
//  Real-time applications

// 1. Why JavaScript Exists

//  Before JavaScript:
 
//  Websites were mostly static.
 
// Example:
 
//  HTML → structure
//  CSS → styling
 
// But websites couldn't:
 
//  ❌ react to user clicks
//  ❌ validate forms instantly
//  ❌ update content dynamically
//  ❌ make API calls without reloading
 
// JavaScript solved this

// 2. What JavaScript Can Do

// JavaScript can:

// ✔ Manipulate HTML/CSS
// ✔ Respond to events
// ✔ Communicate with servers
// ✔ Create animations
// ✔ Build full-stack apps
// ✔ Handle asynchronous tasks

// Example:

// document.querySelector("button")
//   .addEventListener("click", () => {
//     alert("Button clicked!");
//   });


// 3. Where JavaScript Runs

//   JavaScript runs inside a JavaScript Engine.
  
// Examples:
  
//   Environment	Engine
//   Chrome	V8
//   Firefox	SpiderMonkey
//   Safari	JavaScriptCore
//   Node.js	V8


// 4. How JavaScript Works Internally


// JavaScript Code
//        ↓
// Parser                          
//        ↓
// AST (Abstract Syntax Tree)
//        ↓
// Interpreter
//        ↓
// JIT Compiler
//        ↓
// Machine Code
//        ↓
// Execution




// Step 1 — Parsing

// The engine reads your code.

// Example:

// let x = 10;

// The parser checks:

// ✔ syntax correctness
// ✔ keywords
// ✔ structure


// Step 2 — AST Creation

// JavaScript converts code into an:

// Abstract Syntax Tree (AST)

// Example representation:

// VariableDeclaration
//    └── x = 10

// The engine understands code structurally using AST.

// Step 3 — Interpretation

// The interpreter executes code line by line.

// Example:

// console.log("Hello");

// Initially JavaScript was purely interpreted.

// But interpretation alone is slower.

// Step 4 — JIT Compilation

// Modern engines use:

// JIT (Just-In-Time) Compilation

// Frequently used code becomes optimized machine code.

// Example:

// for(let i=0; i<1000000; i++){
//   sum(1,2);
// }

// The engine notices:

// "This function runs many times"

// Then:

// ✔ optimizes it
// ✔ compiles to machine code
// ✔ executes much faster

// This is why modern JavaScript is fast.

// 6. Execution Context

// Whenever JS runs code, it creates an:

// Execution Context

// Contains:

// Variables
// Functions
// this keyword
// Scope information
// Types of Execution Context
// Type	Purpose
// Global Execution Context	Created first
// Function Execution Context	Created per function call
// Example
// function greet(){
//   let name = "Noorr";
// }

// greet();

// Function call creates a new execution context.

// 7. Call Stack

// JavaScript uses a:

// Call Stack

// to manage function execution.

// Example
// function one(){
//   two();
// }

// function two(){
//   console.log("Hello");
// }

// one();

// Stack flow:

// Global()
//   ↓
// one()
//   ↓
// two()

// After completion:

// two removed
// one removed
// Global remains


// 8. Single-Threaded Nature

// JavaScript is:

// Single-threaded

// Meaning:

// One task at a time

// Only one call stack exists.

// 9. Then How Does Async Work?

// This is where browser features help.

// JavaScript uses:

// Web APIs
// Callback Queue
// Event Loop
// Example
// setTimeout(() => {
//   console.log("Hi");
// }, 2000);

// console.log("Hello");

// Output:

// Hello
// Hi
// Internal Working
// setTimeout → Browser Web API
//           ↓
// Timer finishes
//           ↓
// Callback Queue
//           ↓
// Event Loop checks stack
//           ↓
// Moves callback to stack
// 10. Event Loop

// The Event Loop continuously checks:

// Is call stack empty?

// If yes:

// Move queued callbacks into stack

// This powers async programming.

// 11. Memory Management

// JavaScript automatically manages memory using:

// Garbage Collection

// Unused memory gets cleaned automatically.

// Example:

// let obj = {name:"Noorr"};

// obj = null;

// Old object becomes collectible.

// 12. Key Characteristics of JavaScript
// Feature	Meaning
// Dynamic typing	Types change at runtime
// Prototype-based	Uses prototypes instead of classical inheritance
// Single-threaded	One main execution thread
// Event-driven	Reacts to events
// Interpreted + JIT	Fast execution
// 13. Real-World Example

// When clicking a button:

// User Click
//    ↓
// Browser detects event
//    ↓
// Event callback added to queue
//    ↓
// Event loop checks stack
//    ↓
// Callback executed
// 14. Advantages of JavaScript

// ✔ Runs in browser
// ✔ Huge ecosystem
// ✔ Fast due to JIT
// ✔ Asynchronous support
// ✔ Full-stack capability

// 15. Disadvantages

// ❌ Single-thread limitations
// ❌ Type coercion confusion
// ❌ Browser inconsistencies historically
// ❌ Callback complexity (improved by async/await)

// 16. JavaScript Ecosystem

// Popular technologies:

// Area	Technology
// Frontend	React
// Backend	Node.js
// Mobile	React Native
// Desktop	Electron




