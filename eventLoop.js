// The event loop is what makes JavaScript asynchronous (non-blocking) even though it’s single-threaded.
// It continuously checks two main queues:
// Call Stack → runs synchronous code.
// Queues (Microtask & Macrotask) → holds async callbacks waiting to run.

console.log("Start");

setTimeout(() => {
  console.log("Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask (Promise)");
});

console.log("End");


// [ Call Stack ] → Executes sync code
//      ↓
// [ Microtask Queue ] → Run all microtasks (Promises, queueMicrotask)
//      ↓
// [ Macrotask Queue ] → Run next macrotask (setTimeout, setInterval, events)
//      ↓
// (loop repeats)
