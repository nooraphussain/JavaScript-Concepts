// Event Propagation
// 1. Definition

// Event propagation describes how an event travels through the DOM tree when it occurs on an element.

// When you click an element, the event doesn't stay only on that element.
// It moves through the DOM hierarchy in specific phases


// Phase 1 — Capturing Phase

// The event travels from the root to the target element.
// Window → Document → html → body → div → button
// Also called Trickling phase.

parent.addEventListener(
    "click",
    () => {
      console.log("Parent capturing");
    },
    true
  );

// Phase 2 — Target Phase

// The event reaches the actual element where the event occurred.
// button
e.target

// Phase 3 — Bubbling Phase

// The event bubbles back up from the target to the root.

// button → div → body → html → document → window
// Most JavaScript events work in bubbling phase by default.


{/* <div id="parent">
  <button id="child">Click Me</button>
</div> */}


const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});
//Bubble phase output:

// Child clicked
// Parent clicked  




// Stopping Event Propagation

// Sometimes you want the event not to propagate further.

stopPropagation()
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});



// Advantages

// ✔ Allows parent elements to react to child events
// ✔ Enables event delegation
// ✔ Makes global event tracking possible
// ✔ Reduces repeated event listeners

// Disadvantages

// ❌ Can cause unexpected behaviour
// ❌ Hard to debug if many listeners exist