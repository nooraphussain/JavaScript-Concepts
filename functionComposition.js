//Function Composition is the process of combining two or more functions to produce a new function.
// The output of one function becomes the input of the next.

//Why Use It?
// Cleaner, more readable code
// Avoids deeply nested function calls
// Encourages reusable, small functions (functional programming style


const double = x => x * 2;
const square = x => x * x;
const composed = x => square(double(x));
console.log(composed(3)); // (3 * 2)^2 = 36



const trim = str => str.trim();
const capitalize = str => str.split(' ')
                             .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                             .join(' ');
const greet = name => `Hello ${name}`
const combining = name => greet(capitalize(trim(name)));
console.log(combining(" noora  "));