// Event Delegation
// Event delegation is built on top of event propagation.

// 1. Definition

// Event delegation means:
// Attaching a single event listener to a parent element instead of adding listeners to multiple child elements.
// The parent uses event bubbling to detect which child triggered the event.

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>


const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});
//Clicking any <li> prints its text.


// Dynamic Elements (Major Use Case)

// Event delegation works even for elements created later.

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
//Now even newly added items work.




// 6. Advantages

// ✔ Better performance
// ✔ Less memory usage
// ✔ Works with dynamic elements
// ✔ Cleaner code

// 7. Disadvantages

// ❌ Requires checking event.target
// ❌ Not suitable for events that don't bubble