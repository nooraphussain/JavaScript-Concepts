// Every object has an internal property called [[Prototype]].
// This allows objects to inherit properties and methods from another object.
// Functions in JS automatically have a prototype property (used for inheritance).

// 👉 This mechanism is called the Prototype Chain.

const person = {
    greet() {
      console.log("Hello!");
    }
  };
  
const student = {
    name: "Alice"
  };
  
  // Linking prototypes
  Object.setPrototypeOf(student, person);
  student.greet();  // Inherited from person
  

const animal ={eats: true};
const dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats)
console.log(dog.barks)

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
  
  const p1 = new Person("Noora");
  p1.sayHi();  // Hi, I'm Noora
  

  // Prototype Chain

  // When you try to access a property on an object:
  // JS first looks inside the object.
  // If not found, it looks in its __proto__ (prototype).
  // This continues up the prototype chain, until null.

  const arr = [1, 2, 3];
  console.log(arr.__proto__ === Array.prototype); // true
  console.log(arr.__proto__.__proto__ === Object.prototype); // true

  const obj = { name: "Noora" };

console.log(obj.__proto__);  
// Output: {} (Object.prototype)

console.log(obj.__proto__ === Object.prototype);  
// true ✅

console.log(obj.__proto__.__proto__);  
// null (end of the prototype chain)



//- does null have prototype?

// null represents:
// The intentional absence of any object value.
// It is a primitive type, not an object.
console.log(typeof null); // "object"
//Weirdly, typeof null returns "object"—this is a historical bug in JavaScript—but null itself is not an object.

console.log(null.__proto__); // TypeError
//null is not an object, so it doesn’t have a __proto__.