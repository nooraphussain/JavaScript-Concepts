//Functional borrowing
// They are methods available on every function in JavaScript.
// They let you manually control 'this' (the context).

//call()
//Calls a function immediately, with a given 'this' and arguments individually
function greet(greeting, punctuation){
    console.log(greeting, this.name, punctuation);
}

const person = {name: "Noora"};
greet.call(person, "Hello," , "!")

//apply()
//Almost same as call(), but arguments are passed as an array.
greet.apply(person, ["Hi", "!!"]);

//bind()
// Doesn’t call the function immediately.
// Instead, it returns a new function with 'this' permanently bound.
const greetNoora = greet.bind(person, "Heyyy");
greetNoora("?")


const person1 = { name: "Alice" };
const person2 = { name: "Bob" };
const person3 = { name: "Noora" };

function introduce(city, country) {
    console.log(`I am ${this.name} from ${city}, ${country}`);
  }

introduce.call(person1, "Delhi", "India");
introduce.apply(person2, ["Paris", "France"]);
const introNoora = introduce.bind(person3, "Dubai");
introNoora("UAE")