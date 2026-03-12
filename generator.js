function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

const nums = generator()
console.log(nums.next())
console.log(nums.next())
console.log(nums.next())  
console.log(nums.next())


function* numberGenerator(){
    let i=1;
    while(true) yield i++;
}

const gen = numberGenerator()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

function* colors() {
  yield "red";
  yield "green";
  yield "blue";
}

for (let color of colors()) {
  console.log(color);
}

// Why use Generators?

// Lazy evaluation → generate values on demand (not all at once).
// Efficient memory usage → useful for large datasets or infinite sequences.
// Control over iteration → pause/resume execution.
// Often used with iterators and asynchronous programming.


//generator function to print infinite odd numbers with a 1-second interval,

function* infinite(){
  let i = 1;
  while(true){
    yield i;
    i += 2;
  }
}

const printInfinites = infinite();

setInterval(() => {
  console.log(printInfinites.next().value);
}, 1000)