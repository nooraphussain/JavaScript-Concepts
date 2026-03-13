//JIT
//Just-In-Time (JIT) Compilation is a technique where JavaScript code is compiled into
// machine code at runtime, rather than being interpreted line by line or precompiled before execution.


// Why JIT is Needed

// JavaScript is dynamic:
// Variables can change type.
// Objects can gain or lose properties at runtime.
// Functions can be redefined.

let x = 10;
x = "Hello"; // type changes → deoptimization happens


// 5. Inline Caching

// JIT engines also use inline caching:
// Remember where object properties live in memory.
// Accessing them becomes faster in repeated operations.
const user = { name: "Noorr", age: 22 };

console.log(user.name); // first time slower
console.log(user.name); // second time faster via cache


// 6. Advantages of JIT

// ✔ High performance for dynamic languages
// ✔ Optimizes hot code automatically
// ✔ Reduces startup overhead (compiles only when needed)
// ✔ Powers modern web apps and Node.js performance

// 7. Disadvantages / Limitations

// ❌ Increased memory usage (storing compiled code)
// ❌ Deoptimization can happen if assumptions break
// ❌ Performance depends on engine optimizations, which are internal